# Crate — Claude instructions

Crate is a Tinder-style review app for building DJ playlists on Tidal. Anders
reviews a pool of candidate tracks card by card: swipe right = add to the
target (occasion) playlist, swipe left = dismiss. Everything lives in Tidal —
there is no local database:

All three playlists involved are settings, picked in the app under ⚙ (source
and dismiss) and in the header (target); the chosen ids live in localStorage:

- **Source** — the pool the app drains, created as **"Crate Inbox"** on first
  run if nothing is configured.
- **Target** — an ordinary Tidal playlist, one per DJ occasion.
- **Dismiss** — where a left swipe files the track, created as **"Crate
  Dismissed"** on first run. It can be left empty, in which case dismissed
  tracks are just removed from the source. Nothing reads it back either way, so
  a track that gets re-added to the source will be reviewed again.

A playlist can only hold one role at a time, so each picker hides the two
playlists already spoken for.

## Adding tracks to the pool (the main agent job)

Trawl charts/top-lists for candidates, then add them ONLY via the script —
never guess Tidal track IDs:

```
node scripts/pool-add.mjs "Artist - Title" "Artist - Title" ...
printf 'MK - Rhyme Dust\nDom Dolla - Saving Up\n' | node scripts/pool-add.mjs
node scripts/pool-add.mjs --id 251380837        # when you already have the ID
```

It fills "Crate Inbox" unless told otherwise — if Anders has pointed the app's
source at another playlist, name it with `--playlist "<name-or-id>"` (or
`CRATE_SOURCE_PLAYLIST`); the script prints which playlist it's filling.

The script searches Tidal, prints what it matched (sanity-check the artist and
duration in the output — report mismatches to Anders), skips tracks already in
the pool, and prints an added/skipped/missed summary. Relay that summary.

Typical trawl workflow: web-search a chart (e.g. "Beatport tech house top 100",
DR's P3 playlist, Tidal's own viral lists), extract "Artist - Title" lines,
pipe them through the script, report the summary + anything that missed.

## Auth for the scripts

- `~/.config/crate/tidal-tokens.json` holds user tokens; `pool-add.mjs`
  refreshes them automatically. (Override path with `TIDAL_TOKENS_PATH`.)
- If it's missing or refresh fails: run `node scripts/tidal-login.mjs` — this
  needs Anders at the browser, so ask him to run it if you're unattended.
- `TIDAL_CLIENT_ID` lives in `.env.local` (gitignored). Never commit secrets.
- The scripts are vendored into the `home` repo (`pac/skills/crate-add/`) so
  pac on the Pi can feed the inbox too — keep copies in sync when editing them.

## The web app

`src/` is a Vite + React app (patterned after `~/Projects/workout`): all state
in `App.jsx`, Tidal knowledge isolated in `src/api/tidal.js`, deployed to
GitHub Pages by `.github/workflows/deploy.yml`.

Playback is Tidal's embed widget in an iframe, and nothing else. Two facts
killed the in-app player, both worth knowing before anyone rebuilds one:

- Tidal serves playback **only** through its SDKs — the Web API exposes no
  playback endpoints. The `@tidal-music/player` SDK needs MediaSource, which
  iOS Safari doesn't have, so it reports "No active player" on the phone.
- The 30s-preview fallback under it called `api.tidal.com/v1/…/playbackinfo`,
  a legacy internal endpoint outside the developer platform. It needs the
  `r_usr` scope, which developer-platform apps can't request, so it answers
  403 on every device — not a matter of approval, and never going to work.

That leaves the embed widget, which carries its own Tidal session. The
fallback machinery that used to wrap all this (timeouts, retries, an autoplay
unlock, a persisted gate, a postMessage transport) only made failure look
like playback; don't bring it back.

Out of scope for trawl sessions: don't edit `src/`, don't remove tracks from
the source playlist, don't touch target playlists — reviewing is Anders' job in
the app.
