import React, { useState } from 'react';
import { getClientId, setClientId, startLogin, initTidal } from '../api/tidal.js';

export default function TidalLogin({ mode, onDone, err }) {
  const [id, setId] = useState(getClientId());
  const [working, setWorking] = useState(false);

  const connect = async () => {
    setWorking(true);
    try {
      await initTidal();
      await startLogin(); // navigates away
    } catch (e) {
      alert(e.message || e);
      setWorking(false);
    }
  };

  return (
    <div className="app center-col">
      <h1 className="logo">Crate</h1>
      <p className="muted">Tinder for your DJ pool.</p>
      {mode === 'setup' || !getClientId() ? (
        <>
          <p className="muted small">
            One-time setup: create an app at{' '}
            <a href="https://developer.tidal.com" target="_blank" rel="noreferrer">
              developer.tidal.com
            </a>{' '}
            and paste its Client ID. Register this page's URL as a redirect URI:
            <br />
            <code>{window.location.origin + import.meta.env.BASE_URL}</code>
          </p>
          <input
            type="text"
            placeholder="Tidal Client ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button
            disabled={!id.trim()}
            onClick={() => {
              setClientId(id);
              onDone();
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <button onClick={connect} disabled={working}>
            {working ? 'Connecting…' : 'Connect Tidal'}
          </button>
          {err && <div className="error">{err}</div>}
        </>
      )}
    </div>
  );
}
