#!/usr/bin/env node
// Two-step Tidal login for when no browser can reach this machine's loopback
// port — e.g. the headless Pi, with Anders logging in on his phone.
//
// Same PKCE flow as tidal-login.mjs, but instead of running a callback server
// the redirect is allowed to fail: the browser lands on an unreachable
// http://127.0.0.1:8477/callback?code=... and the code is read out of the
// address bar and pasted back here.
//
//   Step 1:  TIDAL_CLIENT_ID=xxx node scripts/tidal-login-paste.mjs start
//            → prints the login URL, stashes the PKCE verifier
//   Step 2:  node scripts/tidal-login-paste.mjs finish "<code or full URL>"
//            → exchanges the code and writes the usual tokens file
//
// The stashed verifier lives next to the tokens file and is deleted on
// success. Codes are single-use and short-lived.

import { createHash, randomBytes } from 'node:crypto';
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadClientId, saveTokens, TOKENS_PATH } from './tidal-login.mjs';

const PENDING_PATH = join(dirname(TOKENS_PATH), 'login-pending.json');
const REDIRECT_URI = 'http://127.0.0.1:8477/callback';
const SCOPES = 'user.read playlists.read playlists.write';

const b64url = (buf) =>
  buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

function start() {
  const clientId = loadClientId();
  const verifier = b64url(randomBytes(48));
  const challenge = b64url(createHash('sha256').update(verifier).digest());

  mkdirSync(dirname(PENDING_PATH), { recursive: true });
  writeFileSync(PENDING_PATH, JSON.stringify({ clientId, verifier }, null, 2) + '\n', {
    mode: 0o600,
  });

  console.log(
    'https://login.tidal.com/authorize?' +
      new URLSearchParams({
        response_type: 'code',
        client_id: clientId,
        redirect_uri: REDIRECT_URI,
        scope: SCOPES,
        code_challenge: challenge,
        code_challenge_method: 'S256',
      }),
  );
}

// Accepts a bare code or the whole failed-redirect URL pasted verbatim.
function extractCode(input) {
  const raw = (input || '').trim();
  if (!raw) throw new Error('Pass the code (or the full redirect URL) as an argument.');
  if (!raw.includes('code=')) return raw;
  const q = raw.slice(raw.indexOf('?') + 1);
  const code = new URLSearchParams(q).get('code');
  if (!code) throw new Error('No code= found in the pasted URL.');
  return code;
}

async function finish(input) {
  const code = extractCode(input);
  let pending;
  try {
    pending = JSON.parse(readFileSync(PENDING_PATH, 'utf8'));
  } catch {
    throw new Error(`No pending login at ${PENDING_PATH} — run "start" first.`);
  }

  const r = await fetch('https://auth.tidal.com/v1/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: pending.clientId,
      code,
      redirect_uri: REDIRECT_URI,
      code_verifier: pending.verifier,
    }),
  });
  if (!r.ok) throw new Error(`Token exchange failed: ${r.status} ${await r.text()}`);

  const tok = await r.json();
  saveTokens(pending.clientId, tok);
  rmSync(PENDING_PATH, { force: true });
  console.log(`Logged in as userId ${tok.user_id ?? tok.user?.userId ?? '?'}.`);
  console.log(`Tokens saved to ${TOKENS_PATH}`);
}

const [cmd, arg] = process.argv.slice(2);
try {
  if (cmd === 'start') start();
  else if (cmd === 'finish') await finish(arg);
  else {
    console.error('Usage: tidal-login-paste.mjs start | finish "<code or URL>"');
    process.exit(1);
  }
} catch (e) {
  console.error(e.message || e);
  process.exit(1);
}
