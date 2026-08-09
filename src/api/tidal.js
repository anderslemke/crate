import {
  init,
  initializeLogin,
  finalizeLogin,
  logout as authLogout,
  credentialsProvider,
} from '@tidal-music/auth';

// Client ID is public by design (PKCE flow, no secret in the browser).
// localStorage can override it, e.g. to point at another Tidal app.
const CLIENT_ID = 'kme2TJ7OPFP0qDSQ';
export const getClientId = () => localStorage.getItem('crate_client_id') || CLIENT_ID;
export const setClientId = (id) => localStorage.setItem('crate_client_id', id.trim());

// 'playback' is vestigial — the embed widget handles audio now — but it stays
// in the list so existing tokens keep matching and nobody has to log in again.
const SCOPES = ['user.read', 'playlists.read', 'playlists.write', 'playback'];
const API = 'https://openapi.tidal.com/v2';
const COUNTRY = 'DK';
export const INBOX_NAME = 'Crate Inbox';
export const DISMISSED_NAME = 'Crate Dismissed';

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

// One of Crate's own playlists: found by cached id first (so a rename in
// Tidal doesn't orphan it), then by name, and created if it's missing.
async function ensureOwnPlaylist(creds, playlists, name, cacheKey) {
  const cached = localStorage.getItem(cacheKey);
  const found =
    (cached && playlists.find((p) => p.id === cached)) ||
    playlists.find((p) => p.name === name);
  const playlist = found || (await createPlaylist(creds, name));
  localStorage.setItem(cacheKey, playlist.id);
  return playlist;
}

// The two playlists Crate owns — the inbox it drains and the graveyard it
// files dismissals in — plus the rest, which are the possible targets.
export async function ensureCratePlaylists(creds) {
  const playlists = await getMyPlaylists(creds);
  const inbox = await ensureOwnPlaylist(creds, playlists, INBOX_NAME, 'crate_inbox');
  const dismissed = await ensureOwnPlaylist(
    creds,
    playlists,
    DISMISSED_NAME,
    'crate_dismissed',
  );
  return {
    inbox,
    dismissed,
    playlists: playlists.filter((p) => p.id !== inbox.id && p.id !== dismissed.id),
  };
}

