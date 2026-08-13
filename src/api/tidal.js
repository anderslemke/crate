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

// Crate works with three playlists, and each of them is a setting: the source
// it drains, the target it files keepers in, and the dismissed pile. These are
// only the names the source and dismissed roles get when they're created on
// first run — after that the ids below are what count, so renaming or
// repointing them in the app is fine.
export const DEFAULT_SOURCE_NAME = 'Crate Inbox';
export const DEFAULT_DISMISS_NAME = 'Crate Dismissed';

export const ROLES = ['source', 'target', 'dismiss'];
const ROLE_KEYS = {
  source: 'crate_inbox',
  target: 'crate_playlist',
  dismiss: 'crate_dismissed',
};
// A role deliberately left empty. Stored rather than cleared, so boot knows
// the difference between "never configured" (create a default) and "switched
// off on purpose" (leave it off).
export const NONE = 'none';

export const getRoleId = (role) => localStorage.getItem(ROLE_KEYS[role]) || '';
export const setRoleId = (role, id) => localStorage.setItem(ROLE_KEYS[role], id || NONE);

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

// --- Preview clips ---

// 30s previews are plain unencrypted AAC, so a bare <audio> element plays
// them — no SDK, no MediaSource, none of what the embed trips over.
//
// Two endpoints, because the obvious one is the wrong one: /playbackinfo is
// the subscriber path and wants the internal `r_usr` scope our tokens can't
// hold (that's the 403 we kept hitting). /playbackinfoprepaywall/v4 is what
// Tidal's own embed server calls, for listeners who may have no subscription
// at all. Try that first and keep the old one as a long shot.
export async function getPreviewUrl(creds, trackId) {
  const attempts = [
    `playbackinfoprepaywall/v4?audioquality=LOW&assetpresentation=PREVIEW&playbackmode=STREAM`,
    `playbackinfo?audioquality=LOW&assetpresentation=PREVIEW&playbackmode=STREAM`,
  ];
  let lastErr;
  for (const q of attempts) {
    try {
      const r = await fetch(
        `https://api.tidal.com/v1/tracks/${trackId}/${q}&countryCode=${COUNTRY}`,
        { headers: { Authorization: `Bearer ${creds.token}` } },
      );
      if (!r.ok) {
        lastErr = new Error(`${q.split('?')[0]}: ${r.status}`);
        continue;
      }
      const info = await r.json();
      const manifest = JSON.parse(atob(info.manifest));
      const url = manifest.urls?.[0];
      if (url) return url;
      lastErr = new Error(`no url in ${info.manifestMimeType}`);
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr || new Error('no preview available');
}

// --- Playlists ---

// Resolve one role to a playlist: the configured id wins (so a rename in
// Tidal doesn't orphan it), then a playlist carrying the default name, and
// failing both we create one. `defaultName` null means the role has no default
// — it stays empty until it's picked.
async function resolveRole(creds, playlists, role, defaultName) {
  const configured = getRoleId(role);
  if (configured === NONE) return null;
  const found =
    (configured && playlists.find((p) => p.id === configured)) ||
    (defaultName && playlists.find((p) => p.name === defaultName));
  if (!found && !defaultName) return null;
  const playlist = found || (await createPlaylist(creds, defaultName));
  setRoleId(role, playlist.id);
  return playlist;
}

// Every playlist Anders owns, plus which one currently plays each role.
// Source and dismissed get created on first run so there's something to start
// from; the target is his pick, and all three can be repointed afterwards.
export async function loadCrateConfig(creds) {
  const playlists = await getMyPlaylists(creds);
  const source = await resolveRole(creds, playlists, 'source', DEFAULT_SOURCE_NAME);
  const dismiss = await resolveRole(creds, playlists, 'dismiss', DEFAULT_DISMISS_NAME);
  const target = await resolveRole(creds, playlists, 'target', null);
  // A role we just created isn't in the fetched list yet, and the pickers need
  // to be able to show it.
  for (const p of [source, dismiss]) {
    if (p && !playlists.some((x) => x.id === p.id)) playlists.push(p);
  }
  return { playlists, source, dismiss, target };
}

