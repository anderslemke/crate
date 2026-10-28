#!/usr/bin/env node
// Add tracks to the "Crate Inbox" Tidal playlist (the review pool).
//
// Usage:
//   node scripts/pool-add.mjs "Artist - Title" ["Artist - Title" ...]
//   node scripts/pool-add.mjs --id 251380837 [--id ...]
//   echo "MK - Rhyme Dust\nDom Dolla - Saving Up" | node scripts/pool-add.mjs
//
// The pool defaults to "Crate Inbox". The app's source playlist is a setting,
// so this is too: pass --playlist <name-or-id>, or set CRATE_SOURCE_PLAYLIST,
// to fill whichever playlist the app is pointed at.
//
// Requires a one-time login: node scripts/tidal-login.mjs

import { getToken } from './tidal-login.mjs';

const API = 'https://openapi.tidal.com/v2';
const COUNTRY = 'DK';
const INBOX_NAME = 'Crate Inbox';
// Tracks Anders has already swiped away in the Crate app. Re-adding them would
// make him reject the same song twice, so they are skipped automatically.
const DISMISSED_NAME = 'Crate Dismissed';

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

async function api(token, path, opts = {}) {
  const sep = path.includes('?') ? '&' : '?';
  for (let attempt = 1; ; attempt++) {
    const r = await fetch(`${API}${path}${sep}countryCode=${COUNTRY}`, {
      ...opts,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/vnd.api+json',
        Accept: 'application/vnd.api+json',
        ...opts.headers,
      },
    });
    // Back off and retry on rate limiting / transient server errors.
    if ((r.status === 429 || r.status >= 500) && attempt < 5) {
      const wait = Number(r.headers.get('retry-after')) * 1000 || attempt * 2000;
      await sleep(wait);
      continue;
    }
    if (!r.ok) throw new Error(`${opts.method || 'GET'} ${path}: ${r.status} ${await r.text()}`);
    const text = await r.text();
    return text ? JSON.parse(text) : null;
  }
}

// Albums that never hold the original studio recording.
const ALT_ALBUM =
  /\b(live|karaoke|tribute|covers?|in the style of|originally performed|instrumental|unplugged|acoustic|remix(es|ed)?)\b/i;

// Titles that are not the original recording.
const ALT_VERSION =
  /\b(remix|re-?edit|radio edit|extended|mix|dub|version|live|remaster(ed)?|acoustic|instrumental|karaoke|sped up|slowed|originally performed)\b/i;

const norm = (s) =>
  s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/\(.*?\)|\[.*?\]/g, '') // strip "(feat. X)" / "[Extended Mix]"
    .replace(/[^a-z0-9æøå ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

function mapTracks(j) {
  const included = new Map();
  for (const res of j.included || []) included.set(`${res.type}/${res.id}`, res);
  const trackRefs = (j.included || []).filter((r) => r.type === 'tracks');
  return trackRefs.map((t) => {
    const albumRef = (t.relationships?.albums?.data || [])[0];
    const album = albumRef ? included.get(`albums/${albumRef.id}`) : null;
    return {
    id: t.id,
    title: t.attributes?.title || '',
    artist: (t.relationships?.artists?.data || [])
      .map((a) => included.get(`artists/${a.id}`)?.attributes?.name)
      .filter(Boolean)
      .join(', '),
    duration: t.attributes?.duration || '',
    album: album?.attributes?.title || '',
    released: album?.attributes?.releaseDate || '',
    };
  });
}

async function search(token, query) {
  // "Artist - Title" works better as plain words; the dash only confuses search.
  const q = query.replace(/\s+-\s+/g, ' ');
  const j = await api(
    token,
    // The query goes in filter[query]. The older /searchResults/<query> path
    // form now 400s with INVALID_RESOURCE_ID. NB camelCase — lowercase 404s.
    // Albums come along because the track title alone cannot tell a live or
    // karaoke recording from the studio original — the album title can.
    `/searchResults?filter%5Bquery%5D=${encodeURIComponent(q)}` +
      `&include=tracks,tracks.artists,tracks.albums`,
  );
  return mapTracks(j);
}

// `wanted` is a playlist name or id, so a repointed source works either way.
async function findPlaylist(token, userId, wanted) {
  let path = `/playlists?filter[r.owners.id]=${userId}`;
  while (path) {
    const j = await api(token, path);
    const hit = (j.data || []).find((p) => p.id === wanted || p.attributes?.name === wanted);
    if (hit) return hit.id;
    path = j.links?.next || null;
  }
  return null;
}

async function findInbox(token, userId, wanted) {
  const id = await findPlaylist(token, userId, wanted);
  if (id) return id;
  console.error(
    `No playlist "${wanted}" found — open the Crate app once to create it, ` +
      'or name the right one with --playlist.',
  );
  process.exit(1);
}

/**
 * Every track Anders already owns across his playlists, keyed by normalised
 * "artist :: title".
 *
 * Serato ties beat grids and hot cues to the specific track, so the same song
 * from a different album is a different song to it and the cues are lost. When
 * a search turns up a version he does not already have, prefer the one he does.
 */
async function knownVersions(token, userId, skipNames) {
  const byKey = new Map();
  let path = `/playlists?filter[r.owners.id]=${userId}`;
  const playlists = [];
  while (path) {
    const j = await api(token, path);
    for (const p of j.data || []) {
      if (!skipNames.has(p.attributes?.name) && p.attributes?.numberOfItems) playlists.push(p.id);
    }
    path = j.links?.next || null;
  }
  for (const id of playlists) {
    let p = `/playlists/${id}/relationships/items?include=items,items.artists`;
    while (p) {
      const j = await api(token, p);
      for (const track of mapTracks(j)) {
        const k = versionKey(track.artist, track.title);
        if (!byKey.has(k)) byKey.set(k, track.id);
      }
      p = j.links?.next || null;
    }
  }
  return byKey;
}

const versionKey = (artist, title) => `${norm(String(artist).split(',')[0])} :: ${norm(title)}`;

async function inboxTrackIds(token, playlistId) {
  const ids = new Set();
  let path = `/playlists/${playlistId}/relationships/items`;
  while (path) {
    const j = await api(token, path);
    for (const ref of j.data || []) ids.add(ref.id);
    path = j.links?.next || null;
  }
  return ids;
}

async function main() {
  const args = process.argv.slice(2);
  const queries = [];
  const directIds = [];
  let pool = process.env.CRATE_SOURCE_PLAYLIST || INBOX_NAME;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--id') directIds.push(args[++i]);
    else if (args[i] === '--playlist') pool = args[++i];
    else if (!args[i].startsWith('--')) queries.push(args[i]);
  }
  if (!queries.length && !directIds.length && !process.stdin.isTTY) {
    const stdin = await new Promise((res) => {
      let d = '';
      process.stdin.on('data', (c) => (d += c));
      process.stdin.on('end', () => res(d));
    });
    queries.push(...stdin.split('\n').map((l) => l.trim()).filter(Boolean));
  }
  if (!queries.length && !directIds.length) {
    console.error('Nothing to add. See usage at the top of this file.');
    process.exit(1);
  }

  const t = await getToken();
  const inboxId = await findInbox(t.accessToken, t.userId, pool);
  const existing = await inboxTrackIds(t.accessToken, inboxId);
  console.log(`Filling "${pool}"\n`);

  const dismissedId = await findPlaylist(t.accessToken, t.userId, DISMISSED_NAME);
  const dismissed = dismissedId
    ? await inboxTrackIds(t.accessToken, dismissedId)
    : new Set();

  // Only needed when we search — a --id was chosen deliberately.
  let known = new Map();
  if (queries.length) {
    console.log('Indexing existing playlists (keeps Serato cues intact)…');
    known = await knownVersions(t.accessToken, t.userId, new Set([INBOX_NAME, DISMISSED_NAME, pool]));
  }

  let added = 0,
    skipped = 0,
    missed = 0;

  const addId = async (id, label) => {
    if (dismissed.has(String(id))) {
      console.log(`SKIP (dismissed earlier): ${label}`);
      skipped++;
      return;
    }
    if (existing.has(String(id))) {
      console.log(`SKIP (already in inbox): ${label}`);
      skipped++;
      return;
    }
    await api(t.accessToken, `/playlists/${inboxId}/relationships/items`, {
      method: 'POST',
      body: JSON.stringify({ data: [{ id: String(id), type: 'tracks' }] }),
    });
    existing.add(String(id));
    console.log(`ADD  ${label}`);
    added++;
  };

  for (const id of directIds) await addId(id, `id:${id}`);

  for (const q of queries) {
    const results = await search(t.accessToken, q);
    if (!results.length) {
      console.log(`MISS (no results): ${q}`);
      missed++;
      continue;
    }
    const nq = norm(q);
    // Anders wants originals, never remixes or live takes. Two signals, and the
    // album is the stronger one: a live recording is usually titled exactly like
    // the studio track, and only the album ("… At The O2 (Live)", "Karaoke —
    // Danske Grand Prix Hits") gives it away. Among what survives, the earliest
    // release is the original album rather than a later compilation.
    const alt = (r) => ALT_VERSION.test(r.title) || ALT_ALBUM.test(r.album);
    const ranked = q.match(ALT_VERSION)
      ? results
      : [...results].sort(
          (a, b) =>
            Number(alt(a)) - Number(alt(b)) ||
            String(a.released || '9999').localeCompare(String(b.released || '9999')),
        );
    const exact = (r) => norm(`${r.artist} ${r.title}`) === nq;
    const loose = (r) =>
      nq.includes(norm(r.title)) && r.artist && nq.includes(norm(r.artist).split(' ')[0]);
    const best =
      ranked.find((r) => exact(r) && !alt(r)) ||
      ranked.find((r) => loose(r) && !alt(r)) ||
      ranked.find(exact) ||
      ranked.find(loose) ||
      null;
    if (!best) {
      // Never fall back to the first hit: a wrong track in the inbox costs more
      // than a miss (nine junk tracks landed that way on 2026-10-28).
      console.log(`MISS (no good match): ${q}  -- top hit: ${ranked[0].artist} - ${ranked[0].title}`);
      missed++;
      continue;
    }
    // If he already owns this song elsewhere, add that exact track instead —
    // otherwise Serato treats it as a new song and the cues are gone.
    const owned = known.get(versionKey(best.artist, best.title));
    if (owned && owned !== best.id) {
      await addId(owned, `${best.artist} - ${best.title} [reusing his existing version] [for: ${q}]`);
      continue;
    }
    await addId(best.id, `${best.artist} - ${best.title} (${best.duration}) [for: ${q}]`);
  }

  console.log(`\nDone: ${added} added, ${skipped} skipped, ${missed} not found.`);
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
