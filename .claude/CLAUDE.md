# Crate — Claude instructions

Crate is a Tinder-style review app for building DJ playlists on Tidal. Anders
reviews a pool of candidate tracks card by card: swipe right = add to the
target (occasion) playlist, swipe left = dismiss. Everything lives in Tidal —
there is no local database:

- The pool is the Tidal playlist **"Crate Inbox"**. Draining it is the app's job.
- Target playlists are ordinary Tidal playlists, one per DJ occasion.
- Dismissing just removes from the inbox; there is no dismiss history, so a
  track that gets re-added will be reviewed again. That's accepted.

## Adding tracks to the pool (the main agent job)

Trawl charts/top-lists for candidates, then add them ONLY via the script —
never guess Tidal track IDs:

```
node scripts/pool-add.mjs "Artist - Title" "Artist - Title" ...
printf 'MK - Rhyme Dust\nDom Dolla - Saving Up\n' | node scripts/pool-add.mjs
node scripts/pool-add.mjs --id 251380837        # when you already have the ID
```

The script searches Tidal, prints what it matched (sanity-check the artist and
duration in the output — report mismatches to Anders), skips tracks already in
the inbox, and prints an added/skipped/missed summary. Relay that summary.

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
GitHub Pages by `.github/workflows/deploy.yml`. Playback goes through the
official `@tidal-music/player` SDK (requires `build.target: 'es2022'`).

Out of scope for trawl sessions: don't edit `src/`, don't remove tracks from
the inbox, don't touch target playlists — reviewing is Anders' job in the app.
