#!/usr/bin/env node
// Add tracks to the "Crate Inbox" Tidal playlist (the review pool).
//
// Usage:
//   node scripts/pool-add.mjs "Artist - Title" ["Artist - Title" ...]
//   node scripts/pool-add.mjs --id 251380837 [--id ...]
//   echo "MK - Rhyme Dust\nDom Dolla - Saving Up" | node scripts/pool-add.mjs
//
// Requires a one-time login: node scripts/tidal-login.mjs

import { getToken } from './tidal-login.mjs';

const API = 'https://openapi.tidal.com/v2';
const COUNTRY = 'DK';
const INBOX_NAME = 'Crate Inbox';

async function api(token, path, opts = {}) {
  const sep = path.includes('?') ? '&' : '?';
  const r = await fetch(`${API}${path}${sep}countryCode=${COUNTRY}`, {
    ...opts,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/vnd.api+json',
      Accept: 'application/vnd.api+json',
      ...opts.headers,
    },
  });
  if (!r.ok) throw new Error(`${opts.method || 'GET'} ${path}: ${r.status} ${await r.text()}`);
  const text = await r.text();
  return text ? JSON.parse(text) : null;
}

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
  return trackRefs.map((t) => ({
    id: t.id,
    title: t.attributes?.title || '',
    artist: (t.relationships?.artists?.data || [])
      .map((a) => included.get(`artists/${a.id}`)?.attributes?.name)
      .filter(Boolean)
      .join(', '),
    duration: t.attributes?.duration || '',
  }));
}

async function search(token, query) {
  const j = await api(
    token,
    `/searchresults/${encodeURIComponent(query)}?include=tracks,tracks.artists`,
  );
  return mapTracks(j);
}

async function findInbox(token, userId) {
  let path = `/playlists?filter[r.owners.id]=${userId}`;
  while (path) {
    const j = await api(token, path);
    const hit = (j.data || []).find((p) => p.attributes?.name === INBOX_NAME);
    if (hit) return hit.id;
    path = j.links?.next || null;
  }
  console.error(`No "${INBOX_NAME}" playlist found — open the Crate app once to create it.`);
  process.exit(1);
}

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
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--id') directIds.push(args[++i]);
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
  const inboxId = await findInbox(t.accessToken, t.userId);
  const existing = await inboxTrackIds(t.accessToken, inboxId);

  let added = 0,
    skipped = 0,
    missed = 0;

  const addId = async (id, label) => {
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
    const best =
      results.find((r) => norm(`${r.artist} ${r.title}`) === nq) ||
      results.find(
        (r) => nq.includes(norm(r.title)) && r.artist && nq.includes(norm(r.artist).split(' ')[0]),
      ) ||
      results[0];
    await addId(best.id, `${best.artist} - ${best.title} (${best.duration}) [for: ${q}]`);
  }

  console.log(`\nDone: ${added} added, ${skipped} skipped, ${missed} not found.`);
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
