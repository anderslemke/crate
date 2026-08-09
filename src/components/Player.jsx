import React, { useEffect, useRef, useState } from 'react';

const fmt = (s) =>
  `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

const EMBED_ORIGIN = 'https://embed.tidal.com';

// Tidal's embed, driven by postMessage — NOT by its own ▶, which does nothing
// in this context. `{commandName: "play"|"pause"}` goes in, `{currentTime,
// duration, paused}` comes back.
//
// Nothing ever starts on its own: a card opens silent and plays when you ask
// it to. Current and next card are both mounted, so a swipe promotes an
// iframe that has already loaded; the outgoing one unmounts, which is what
// stops its audio.
export default function Player({ track, next, inboxId }) {
  const refs = useRef(new Map());
  const [status, setStatus] = useState({
    currentTime: 0,
    duration: track.duration || 30,
    paused: true,
  });

  const send = (itemId, commandName) => {
    refs.current
      .get(itemId)
      ?.contentWindow?.postMessage(JSON.stringify({ commandName }), EMBED_ORIGIN);
  };

  // Live progress from the visible embed only.
  useEffect(() => {
    const onMsg = (e) => {
      if (e.origin !== EMBED_ORIGIN) return;
      if (e.source !== refs.current.get(track.itemId)?.contentWindow) return;
      let d = e.data;
      if (typeof d === 'string') {
        try {
          d = JSON.parse(d);
        } catch {
          return;
        }
      }
      if (d && typeof d.currentTime === 'number') {
        setStatus({
          currentTime: d.currentTime,
          duration: d.duration || track.duration || 30,
          paused: !!d.paused,
        });
      }
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [track.itemId]);

  // Card change: back to a silent, unstarted player. The outgoing iframe
  // unmounts on its own, which stops whatever it was playing; the incoming
  // one is told nothing until you ask for it.
  useEffect(() => {
    setStatus({ currentTime: 0, duration: track.duration || 30, paused: true });
    for (const id of refs.current.keys()) if (id !== track.itemId) send(id, 'pause');
  }, [track.itemId]); // eslint-disable-line react-hooks/exhaustive-deps

  // Optimistic toggle: don't rely on the embed's status broadcasts to know
  // whether it's playing — flip our own state and send the matching command;
  // incoming broadcasts (when they arrive) overwrite it with the truth.
  useEffect(() => {
    const toggle = () => {
      setStatus((s) => {
        send(track.itemId, s.paused ? 'play' : 'pause');
        return { ...s, paused: !s.paused };
      });
    };
    const onKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
      if (e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('crate-toggle-play', toggle);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('crate-toggle-play', toggle);
    };
  }, [track.itemId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="player card">
      {[track, next].filter(Boolean).map((t) => (
        <iframe
          key={t.itemId}
          ref={(el) => {
            if (el) refs.current.set(t.itemId, el);
            else refs.current.delete(t.itemId);
          }}
          className="embed"
          style={t === track ? undefined : { display: 'none' }}
          title={`Tidal player ${t.title}`}
          src={`https://embed.tidal.com/tracks/${t.trackId}`}
          // Exactly what was on the iframe the last time this played. Tidal
          // documents a wider set; that's a change for after it works again.
          allow="encrypted-media; autoplay"
        />
      ))}
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{
            width: status.duration
              ? `${(status.currentTime / status.duration) * 100}%`
              : 0,
          }}
        />
      </div>
      <div className="row">
        <button
          className="secondary compact"
          onClick={() => window.dispatchEvent(new Event('crate-toggle-play'))}
        >
          {status.paused ? '▶' : '⏸'}
        </button>
        <span className="stopwatch">
          {fmt(status.currentTime)} / {fmt(status.duration)}
        </span>
      </div>
      {/* https universal links, not the tidal:// scheme — iOS declines custom
          schemes from an ordinary link often enough to be useless. */}
      <div className="row player-links">
        <a className="applink" href={`https://tidal.com/track/${track.trackId}`}>
          ▶ This track in Tidal
        </a>
        {inboxId && (
          <a className="applink right" href={`https://tidal.com/playlist/${inboxId}`}>
            Inbox in Tidal
          </a>
        )}
      </div>
    </div>
  );
}
