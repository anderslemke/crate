#!/usr/bin/env node
// One-time CLI login for the pool-add script.
// PKCE + loopback redirect: register http://127.0.0.1:8477/callback as a
// redirect URI on the Tidal app. Saves tokens to .tidal-tokens.json (gitignored).
//
// Usage: TIDAL_CLIENT_ID=xxx node scripts/tidal-login.mjs
//        (or put TIDAL_CLIENT_ID=xxx in .env.local)

import { createServer } from 'node:http';
import { createHash, randomBytes } from 'node:crypto';
import { execFile } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
export const TOKENS_PATH = join(root, '.tidal-tokens.json');

export function loadClientId() {
  if (process.env.TIDAL_CLIENT_ID) return process.env.TIDAL_CLIENT_ID;
  try {
    const env = readFileSync(join(root, '.env.local'), 'utf8');
    const m = /^TIDAL_CLIENT_ID=(.+)$/m.exec(env);
    if (m) return m[1].trim();
  } catch {}
  console.error('Set TIDAL_CLIENT_ID in the environment or in .env.local');
  process.exit(1);
}

const PORT = 8477;
const REDIRECT_URI = `http://127.0.0.1:${PORT}/callback`;
const SCOPES = 'user.read playlists.read playlists.write';

const b64url = (buf) =>
  buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

async function main() {
  const clientId = loadClientId();
  const verifier = b64url(randomBytes(48));
  const challenge = b64url(createHash('sha256').update(verifier).digest());

  const authUrl =
    'https://login.tidal.com/authorize?' +
    new URLSearchParams({
      response_type: 'code',
      client_id: clientId,
      redirect_uri: REDIRECT_URI,
      scope: SCOPES,
      code_challenge: challenge,
      code_challenge_method: 'S256',
    });

  const code = await new Promise((resolve, reject) => {
    const server = createServer((req, res) => {
      const url = new URL(req.url, REDIRECT_URI);
      if (url.pathname !== '/callback') return res.end();
      const c = url.searchParams.get('code');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(c ? '<h2>Logged in — you can close this tab.</h2>' : '<h2>Login failed.</h2>');
      server.close();
      c ? resolve(c) : reject(new Error(url.searchParams.get('error') || 'no code'));
    });
    server.listen(PORT, '127.0.0.1', () => {
      console.log('Opening browser for Tidal login…');
      console.log(`If it does not open, visit:\n${authUrl}\n`);
      execFile('open', [authUrl], () => {});
    });
  });

  const r = await fetch('https://auth.tidal.com/v1/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: clientId,
      code,
      redirect_uri: REDIRECT_URI,
      code_verifier: verifier,
    }),
  });
  if (!r.ok) throw new Error(`Token exchange failed: ${r.status} ${await r.text()}`);
  const tok = await r.json();
  saveTokens(clientId, tok);
  console.log(`Logged in as userId ${tok.user_id ?? tok.user?.userId ?? '?'}.`);
  console.log(`Tokens saved to ${TOKENS_PATH}`);
}

export function saveTokens(clientId, tok) {
  writeFileSync(
    TOKENS_PATH,
    JSON.stringify(
      {
        clientId,
        accessToken: tok.access_token,
        refreshToken: tok.refresh_token,
        userId: tok.user_id ?? tok.user?.userId ?? null,
        expiresAt: Date.now() + (tok.expires_in || 3600) * 1000,
      },
      null,
      2,
    ) + '\n',
  );
}

// Returns a fresh access token + userId, refreshing if needed.
export async function getToken() {
  let t;
  try {
    t = JSON.parse(readFileSync(TOKENS_PATH, 'utf8'));
  } catch {
    console.error('No .tidal-tokens.json — run: node scripts/tidal-login.mjs');
    process.exit(1);
  }
  if (Date.now() < t.expiresAt - 60_000) return t;
  const r = await fetch('https://auth.tidal.com/v1/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: t.clientId,
      refresh_token: t.refreshToken,
    }),
  });
  if (!r.ok) {
    console.error(`Token refresh failed (${r.status}) — run: node scripts/tidal-login.mjs`);
    process.exit(1);
  }
  const tok = await r.json();
  saveTokens(t.clientId, { refresh_token: t.refreshToken, user_id: t.userId, ...tok });
  return JSON.parse(readFileSync(TOKENS_PATH, 'utf8'));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((e) => {
    console.error(e.message || e);
    process.exit(1);
  });
}
