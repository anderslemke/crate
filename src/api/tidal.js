import {
  init,
  initializeLogin,
  finalizeLogin,
  logout as authLogout,
  credentialsProvider,
} from '@tidal-music/auth';
import * as Player from '@tidal-music/player';
import * as EventProducer from '@tidal-music/event-producer';

// Client ID is public by design (PKCE flow, no secret in the browser).
// localStorage can override it, e.g. to point at another Tidal app.
const CLIENT_ID = 'kme2TJ7OPFP0qDSQ';
export const getClientId = () => localStorage.getItem('crate_client_id') || CLIENT_ID;
export const setClientId = (id) => localStorage.setItem('crate_client_id', id.trim());

const SCOPES = ['user.read', 'playlists.read', 'playlists.write', 'playback'];
const API = 'https://openapi.tidal.com/v2';
const COUNTRY = 'DK';
export const INBOX_NAME = 'Crate Inbox';

const redirectUri = () => window.location.origin + import.meta.env.BASE_URL;

export async function initTidal() {
  await init({
    clientId: getClientId(),
    credentialsStorageKey: 'crate-tidal',
    scopes: SCOPES,
  });
}

// Returns true if we just completed a login redirect.
export async function handleLoginRedirect() {
  if (!window.location.search.includes('code=')) return false;
  await finalizeLogin(window.location.search);
  window.history.replaceState(null, '', window.location.pathname);
  return true;
}

export async function startLogin() {
  const url = await initializeLogin({ redirectUri: redirectUri() });
  window.location.href = url;
}

export function logout() {
  authLogout();
}

// Resolves to credentials with a real user token, or null if not logged in.
export async function getUserCredentials() {
  try {
    const creds = await credentialsProvider.getCredentials();
    return creds && creds.token && creds.userId ? creds : null;
  } catch {
    return null;
  }
}

async function api(path, { method = 'GET', body, token } = {}) {
  const sep = path.includes('?') ? '&' : '?';
  const r = await fetch(`${API}${path}${sep}countryCode=${COUNTRY}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/vnd.api+json',
      Accept: 'application/vnd.api+json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!r.ok) {
    const text = await r.text();
    const err = new Error(`${method} ${path}: ${r.status} ${text}`);
    err.status = r.status;
    throw err;
  }
  if (r.status === 204 || r.status === 202) return null;
  const text = await r.text();
  return text ? JSON.parse(text) : null;
}

export function parseIsoDuration(iso) {
  if (typeof iso === 'number') return iso;
  const m = /PT(?:(\d+)H)?(?:(\d+)M)?(?:([\d.]+)S)?/.exec(iso || '');
  if (!m) return 0;
  return (+(m[1] || 0)) * 3600 + (+(m[2] || 0)) * 60 + Math.round(+(m[3] || 0));
}

// --- Playlists ---

export async function getMyPlaylists(creds) {
  const out = [];
  let path = `/playlists?filter[r.owners.id]=${creds.userId}`;
  while (path) {
    const j = await api(path, { token: creds.token });
    for (const p of j.data || []) {
      out.push({
        id: p.id,
        name: p.attributes?.name || '(unnamed)',
        numberOfItems: p.attributes?.numberOfItems ?? null,
      });
    }
    path = j.links?.next || null;
  }
  return out;
}

export async function createPlaylist(creds, name) {
  const j = await api('/playlists', {
    method: 'POST',
    token: creds.token,
    body: {
      data: {
        type: 'playlists',
        attributes: { name, description: 'Made with Crate', accessType: 'UNLISTED' },
      },
    },
  });
  return { id: j.data.id, name: j.data.attributes?.name || name, numberOfItems: 0 };
}

// All items of a playlist, with track attributes resolved from `included`.
// Returns [{trackId, itemId, title, artist, album, duration}]
export async function getPlaylistItems(creds, playlistId) {
  const out = [];
  const included = new Map(); // "type/id" -> resource
  let path = `/playlists/${playlistId}/relationships/items?include=items,items.artists,items.albums`;
  while (path) {
    const j = await api(path, { token: creds.token });
    for (const res of j.included || []) included.set(`${res.type}/${res.id}`, res);
    for (const ref of j.data || []) {
      if (ref.type !== 'tracks') continue; // skip videos for now
      const track = included.get(`tracks/${ref.id}`);
      const a = track?.attributes || {};
      const artistNames = (track?.relationships?.artists?.data || [])
        .map((ar) => included.get(`artists/${ar.id}`)?.attributes?.name)
        .filter(Boolean)
        .join(', ');
      const albumName = (track?.relationships?.albums?.data || [])
        .map((al) => included.get(`albums/${al.id}`)?.attributes?.title)
        .filter(Boolean)[0];
      out.push({
        trackId: ref.id,
        itemId: ref.meta?.itemId,
        title: a.title || `Track ${ref.id}`,
        artist: artistNames || '',
        album: albumName || '',
        duration: parseIsoDuration(a.duration),
      });
    }
    path = j.links?.next || null;
  }
  return out;
}

export async function addToPlaylist(creds, playlistId, trackId) {
  await api(`/playlists/${playlistId}/relationships/items`, {
    method: 'POST',
    token: creds.token,
    body: { data: [{ id: trackId, type: 'tracks' }] },
  });
}

export async function removeFromPlaylist(creds, playlistId, item) {
  await api(`/playlists/${playlistId}/relationships/items`, {
    method: 'DELETE',
    token: creds.token,
    body: {
      data: [{ id: item.trackId, type: 'tracks', meta: { itemId: item.itemId } }],
    },
  });
}

export async function ensureInbox(creds) {
  const cached = localStorage.getItem('crate_inbox');
  const playlists = await getMyPlaylists(creds);
  const found =
    (cached && playlists.find((p) => p.id === cached)) ||
    playlists.find((p) => p.name === INBOX_NAME);
  const inbox = found || (await createPlaylist(creds, INBOX_NAME));
  localStorage.setItem('crate_inbox', inbox.id);
  return { inbox, playlists: playlists.filter((p) => p.id !== inbox.id) };
}

// --- Player ---

let playerReady = null;

// The player refuses to play without an event sender (play-logging is
// mandatory); wire up the official event producer against Tidal's collector.
export function initPlayer() {
  if (!playerReady) {
    playerReady = (async () => {
      await EventProducer.init({
        appInfo: { appName: 'Crate', appVersion: '0.1.0' },
        blockedConsentCategories: {
          NECESSARY: false,
          PERFORMANCE: false,
          TARGETING: true,
        },
        credentialsProvider,
        platform: {
          browserName: navigator.userAgent.includes('Firefox') ? 'Firefox' : 'Chromium',
          browserVersion: 'unknown',
          osName: navigator.platform || 'unknown',
        },
        tlConsumerUri: 'https://ec.tidal.com/api/event-batch',
        tlPublicConsumerUri: 'https://ec.tidal.com/api/public/event-batch',
      });
      Player.setCredentialsProvider(credentialsProvider);
      Player.setEventSender(EventProducer);
    })();
  }
  return playerReady;
}

// Start position heuristic: skip the intro, land around the first verse/chorus.
// 25% in, capped at 45s; short tracks start from the top. `crate_start_bias`
// (seconds, set from the UI) nudges it globally.
export function autoStart(duration) {
  if (!duration || duration < 90) return 0;
  const bias = +(localStorage.getItem('crate_start_bias') || 0);
  return Math.max(0, Math.min(Math.round(duration * 0.25), 45) + bias);
}

// Loads and starts playback. Returns 'full' when the real track plays,
// 'preview' when we had to fall back to the 30s demo clip (app not yet
// production-approved, or DRM unsupported in this browser). Throws only if
// both fail — with the original full-track error, which is the useful one.
export async function loadAndPlay(trackId, startSeconds) {
  await initPlayer();
  const media = (productType) => ({
    productId: String(trackId),
    productType,
    sourceId: 'crate',
    sourceType: 'OTHER',
  });
  try {
    await Player.load(media('track'), startSeconds);
    await Player.play();
    return 'full';
  } catch (e) {
    console.error('[crate] full-track load failed:', e);
    try {
      await Player.load(media('demo'), 0); // previews are 30s; start at 0
      await Player.play();
      return 'preview';
    } catch (e2) {
      console.error('[crate] demo load failed too:', e2);
      throw e;
    }
  }
}

export const playerControls = {
  play: () => Player.play(),
  pause: () => Player.pause(),
  seek: (s) => Player.seek(Math.max(0, s)),
  position: () => Player.getAssetPosition(),
  state: () => Player.getPlaybackState(),
  events: Player.events,
  reset: () => Player.reset(),
};
