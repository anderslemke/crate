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

// --- Player ---

let playerReady = null;

// The player refuses to play without an event sender (play-logging is
// mandatory); wire up the official event producer against Tidal's collector.
// A rejected init drops the memo: one bad network moment at boot shouldn't
// leave every later card awaiting the same rejected promise.
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
    })().catch((e) => {
      playerReady = null;
      throw e;
    });
  }
  return playerReady;
}

// Nothing in the SDK settles on its own if a request stalls, and a load that
// never settles is exactly what "it just didn't start" looks like. Time out
// so the fallbacks get a turn.
const LOAD_TIMEOUT = 12000;

function withTimeout(promise, what, ms = LOAD_TIMEOUT) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`${what} timed out after ${ms / 1000}s`)), ms);
    Promise.resolve(promise).then(
      (v) => {
        clearTimeout(timer);
        resolve(v);
      },
      (e) => {
        clearTimeout(timer);
        reject(e);
      },
    );
  });
}

const msg = (e) => String(e?.message || e || 'unknown');

// Autoplay policy, not a broken player: the audio is loaded and one user
// gesture away from playing. Never a reason to fall back or to give up.
// Chrome words it "the user didn't interact with the document first", Safari
// "not allowed by the user agent" — match the name first, the prose second.
const isAutoplayBlocked = (e) =>
  e?.name === 'NotAllowedError' ||
  /notallowed|not allowed|user (gesture|activation)|interact with the document/i.test(
    String(e?.message || e),
  );

// Tidal actually refusing us (dev-mode app, no production approval). This is
// the only failure worth latching for the session — everything else is worth
// retrying on the next card.
const isAuthGated = (e) => /\b(401|403)\b/.test(String(e?.message || e));

// The SDK can't run at all in some browsers — iOS Safari has no MediaSource,
// so the player never gets an active instance and every call comes back "No
// active player". That's a capability, not a blip: stop paying two loads and
// two timeouts per card to rediscover it.
let sdkUnavailable = false;
const isSdkUnavailable = (e) =>
  /no active player|mediasource|not supported|unsupported/i.test(String(e?.message || e));

// Start position heuristic: skip the intro, land around the first verse/chorus.
// 25% in, capped at 45s; short tracks start from the top. `crate_start_bias`
// (seconds, set from the UI) nudges it globally.
export function autoStart(duration) {
  if (!duration || duration < 90) return 0;
  const bias = +(localStorage.getItem('crate_start_bias') || 0);
  return Math.max(0, Math.min(Math.round(duration * 0.25), 45) + bias);
}

// In-app playback being impossible is a property of the device and the app's
// Tidal approval, not of this page load: an iPhone has no MediaSource for the
// SDK, and an unapproved app gets 403 on preview manifests. Remember it so
// every session doesn't re-prove it on its first card, but let it expire in
// case approval lands — and let Retry clear it outright.
const GATE_KEY = 'crate_playback_gate';
const GATE_TTL = 24 * 60 * 60 * 1000;

let gated = Date.now() - +(localStorage.getItem(GATE_KEY) || 0) < GATE_TTL;
export const isPlaybackGated = () => gated;

function latchPlaybackGate() {
  gated = true;
  localStorage.setItem(GATE_KEY, String(Date.now()));
}

// A full re-probe: forget both the gate and the SDK verdict.
export function clearPlaybackGate() {
  gated = false;
  sdkUnavailable = false;
  localStorage.removeItem(GATE_KEY);
}

// Every load takes a ticket. A newer load — or a stop, i.e. the card being
// swiped away — makes the older one stale, so a slow response can't start
// playing the previous card over the one that's now on screen.
let loadSeq = 0;

// 30s-preview fallback, bypassing the player SDK: dev-mode apps get 403 on
// FULL playbackinfo, but PREVIEW manifests may still be served. Previews are
// plain unencrypted AAC, so a bare <audio> element can play them.
//
// One element for the whole session, deliberately: iOS only ever lets an
// element play programmatically after that element has been started from a
// real user gesture. A fresh `new Audio()` per card is locked every time —
// this one gets unlocked on the first tap and stays unlocked.
let audioEl = null;
let previewActive = false; // is the clip the live backend right now?
let unlocked = false;

// 44-byte WAV, zero samples.
const SILENCE =
  'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAgD4AAAB9AAACABAAZGF0YQAAAAA=';

function ensureAudioEl() {
  if (!audioEl) {
    audioEl = new Audio();
    audioEl.playsInline = true;
    audioEl.preload = 'auto';
  }
  return audioEl;
}

// Must be called synchronously from a user-gesture handler — one await first
// and iOS considers the gesture spent. Playing silence is enough to mark the
// element as user-started.
export function unlockPreviewAudio() {
  if (unlocked || previewActive) return;
  const el = ensureAudioEl();
  el.src = SILENCE;
  unlocked = true;
  const p = el.play();
  if (p?.catch) p.catch(() => { unlocked = false; });
}

function stopPreviewAudio() {
  previewActive = false;
  if (audioEl) quiet(() => audioEl.pause());
}

async function playPreviewClip(trackId) {
  const creds = await credentialsProvider.getCredentials();
  const r = await fetch(
    `https://api.tidal.com/v1/tracks/${trackId}/playbackinfo?audioquality=LOW&playbackmode=STREAM&assetpresentation=PREVIEW`,
    { headers: { Authorization: `Bearer ${creds.token}` } },
  );
  if (!r.ok) throw new Error(`preview playbackinfo: ${r.status}`);
  const info = await r.json();
  const manifest = JSON.parse(atob(info.manifest));
  const url = manifest.urls?.[0];
  if (!url) throw new Error(`no url in ${info.manifestMimeType} manifest`);
  const el = ensureAudioEl();
  // Claim the element before awaiting: a gesture landing mid-load must not
  // overwrite this src with the unlock silence.
  previewActive = true;
  el.src = url;
  try {
    await el.play();
  } catch (e) {
    if (!isAutoplayBlocked(e)) {
      previewActive = false;
      throw e;
    }
    // The src is loaded, so ▶ starts it instantly.
    return { mode: 'preview', blocked: true };
  }
  return { mode: 'preview' };
}

async function loadFullTrack(trackId, startSeconds, stale) {
  await withTimeout(initPlayer(), 'player init');
  if (stale()) return { stale: true };
  await withTimeout(
    Player.load(
      {
        productId: String(trackId),
        productType: 'track',
        sourceId: 'crate',
        sourceType: 'OTHER',
      },
      startSeconds,
    ),
    'track load',
  );
  if (stale()) return { stale: true };
  stopPreviewAudio();
  try {
    await Player.play();
  } catch (e) {
    if (!isAutoplayBlocked(e)) throw e;
    return { mode: 'full', blocked: true };
  }
  return { mode: 'full' };
}

// Loads and starts playback, returning what happened:
//   {mode: 'full'}          — the real track is playing
//   {mode: 'preview'}       — the 30s clip fallback is playing
//   {..., blocked: true}    — loaded and ready, but the browser wants a
//                             gesture before it makes noise
//   {stale: true}           — a newer load superseded this one; do nothing
// Throws only when every backend failed for real, with the full-track error,
// which is the useful one. Transient failures get one retry before the
// fallbacks, since a retried timeout usually just works.
export async function loadAndPlay(trackId, startSeconds) {
  const seq = ++loadSeq;
  const stale = () => seq !== loadSeq;
  let fullErr = sdkUnavailable ? new Error('player SDK unavailable in this browser') : null;
  for (let attempt = 0; !sdkUnavailable && attempt < 2; attempt++) {
    try {
      return await loadFullTrack(trackId, startSeconds, stale);
    } catch (e) {
      if (stale()) return { stale: true };
      fullErr = e;
      if (isSdkUnavailable(e)) {
        sdkUnavailable = true;
        break;
      }
      if (isAuthGated(e) || attempt === 1) break;
      console.warn('[crate] full-track load failed, retrying:', e);
    }
  }
  console.error('[crate] full-track load failed:', fullErr);
  try {
    const result = await playPreviewClip(trackId);
    if (stale()) {
      stopPreviewAudio();
      return { stale: true };
    }
    return result;
  } catch (e2) {
    if (stale()) return { stale: true };
    console.error('[crate] preview fallback failed too:', e2);
    // Nothing in-app can work when the SDK can't run here (or is refused)
    // and Tidal also refuses the preview manifest. Stop asking.
    if ((sdkUnavailable || isAuthGated(fullErr)) && isAuthGated(e2)) latchPlaybackGate();
    // Both reasons, because either one alone sends you down the wrong path.
    throw new Error(`full: ${msg(fullErr)} · preview: ${msg(e2)}`);
  }
}

// The SDK throws if it's asked about a player that never loaded anything —
// which happens on every card that fell back to the embed. Readers must not
// throw: they run on a 400ms poll and inside effect cleanups.
function quiet(fn, fallback) {
  try {
    const v = fn();
    if (v && typeof v.catch === 'function') v.catch(() => {});
    return v;
  } catch {
    return fallback;
  }
}

// Controls route to whichever backend is active: the SDK player for full
// tracks, or the fallback <audio> element for 30s previews.
export const playerControls = {
  // Always a promise, never a synchronous throw: the caller shows whatever
  // reason it refused for, and a click handler is a bad place to explode.
  play: () => {
    try {
      return Promise.resolve(previewActive ? audioEl.play() : Player.play());
    } catch (e) {
      return Promise.reject(e);
    }
  },
  pause: () => quiet(() => (previewActive ? audioEl.pause() : Player.pause())),
  seek: (s) =>
    quiet(() => {
      if (previewActive) audioEl.currentTime = Math.max(0, s);
      else Player.seek(Math.max(0, s));
    }),
  position: () =>
    quiet(() => (previewActive ? audioEl.currentTime : Player.getAssetPosition()), 0) || 0,
  state: () =>
    quiet(() => {
      if (previewActive) return audioEl.paused ? 'NOT_PLAYING' : 'PLAYING';
      return Player.getPlaybackState();
    }, 'NOT_PLAYING'),
  // Also cancels any in-flight load, so the card being swiped away can't
  // start playing a moment after it's gone.
  stop: () => {
    loadSeq++;
    stopPreviewAudio();
    quiet(() => Player.pause());
  },
};
