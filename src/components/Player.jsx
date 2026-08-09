import React, { useEffect, useRef, useState } from 'react';
import { autoStart, isPlaybackGated, loadAndPlay } from '../api/tidal.js';

const fmt = (s) =>
  `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

const EMBED_ORIGIN = 'https://embed.tidal.com';

// Tidal's embed accepts {commandName: "play"|"pause"} via postMessage and
// broadcasts {currentTime, duration, paused} back — no seek, sadly, so the
// jump buttons stay SDK-only. Next card's iframe is kept mounted (hidden) so
// promotion swaps players instantly.
function EmbedPlayer({ track, next }) {
  const refs = useRef(new Map());
  const [status, setStatus] = useState({ currentTime: 0, duration: 30, paused: true });

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
          duration: d.duration || 30,
          paused: !!d.paused,
        });
      }
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [track.itemId]);

  // Card change: silence the outgoing embed, start the incoming one.
  // (The swipe itself is the user gesture that lets autoplay through.)
  useEffect(() => {
    setStatus({ currentTime: 0, duration: 30, paused: true });
    for (const id of refs.current.keys()) if (id !== track.itemId) send(id, 'pause');
    send(track.itemId, 'play');
  }, [track.itemId]);

  useEffect(() => {
    const toggle = () => send(track.itemId, status.paused ? 'play' : 'pause');
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
  });

  const embeds = [track, next].filter(Boolean);
  return (
    <div className="player card">
      {embeds.map((t) => (
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
          allow="encrypted-media; autoplay"
          onLoad={() => t === track && send(t.itemId, 'play')}
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
          onClick={() => send(track.itemId, status.paused ? 'play' : 'pause')}
        >
          {status.paused ? '▶' : '⏸'}
        </button>
        <span className="stopwatch">
          {fmt(status.currentTime)} / {fmt(status.duration)}
        </span>
        <a className="small right" href={`tidal://track/${track.trackId}`}>
          Open in Tidal app
        </a>
      </div>
    </div>
  );
}

export default function Player({ track, next, controls }) {
  const [pos, setPos] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [preview, setPreview] = useState(false);
  const [loadErr, setLoadErr] = useState('');
  const barRef = useRef(null);
  // Preview clips are ~30s regardless of the track's real length.
  const duration = preview ? 30 : track.duration || 0;

  // Auto-play each new card from the skip-intro position — unless playback
  // is known to be gated, in which case we stay in embed mode without the
  // 403 round-trips (keeps the preloaded iframes mounted).
  useEffect(() => {
    if (isPlaybackGated()) {
      setLoadErr('gated');
      return undefined;
    }
    let cancelled = false;
    setLoadErr('');
    setPos(autoStart(duration));
    (async () => {
      try {
        const mode = await loadAndPlay(track.trackId, autoStart(duration));
        if (cancelled) return;
        setPreview(mode === 'preview');
        setPlaying(true);
      } catch (e) {
        if (cancelled) return;
        setPlaying(false);
        setPreview(false);
        setLoadErr(String(e?.message || e));
      }
    })();
    return () => {
      cancelled = true;
      controls.stop();
    };
  }, [track.trackId]); // eslint-disable-line react-hooks/exhaustive-deps

  // Poll position while playing.
  useEffect(() => {
    const t = setInterval(() => {
      setPos(controls.position() || 0);
      setPlaying(controls.state() === 'PLAYING');
    }, 400);
    return () => clearInterval(t);
  }, [controls]);

  const seekTo = (s) => {
    controls.seek(Math.min(Math.max(0, s), Math.max(0, duration - 1)));
    setPos(s);
  };
  const seekFrac = (f) => seekTo(Math.round(duration * f));

  const onBar = (e) => {
    const rect = barRef.current.getBoundingClientRect();
    seekFrac(Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width)));
  };

  const toggle = () => {
    if (controls.state() === 'PLAYING') controls.pause();
    else Promise.resolve(controls.play()).catch((e) => setLoadErr(String(e?.message || e)));
  };

  // Keyboard: space toggles, 1-4 jump, ,/. nudge ±10s
  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
      if (e.key === ' ') {
        e.preventDefault();
        toggle();
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        seekFrac({ 1: 0, 2: 0.25, 3: 0.5, 4: 0.75 }[e.key]);
      } else if (e.key === ',') seekTo(pos - 10);
      else if (e.key === '.') seekTo(pos + 10);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('crate-toggle-play', toggle);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('crate-toggle-play', toggle);
    };
  });

  // Both in-app backends refused (app not production-approved yet):
  // fall back to Tidal's embed widget, remote-controlled via postMessage.
  if (loadErr) {
    return <EmbedPlayer track={track} next={next} />;
  }

  return (
    <div className="player card">
      {preview && <div className="muted small">30s preview mode</div>}
      <div className="progress-bar tall" ref={barRef} onPointerDown={onBar}>
        <div
          className="progress-bar-fill"
          style={{ width: duration ? `${(pos / duration) * 100}%` : 0 }}
        />
      </div>
      <div className="row player-times">
        <span className="stopwatch">{fmt(pos)}</span>
        <span className="stopwatch right">{fmt(duration)}</span>
      </div>
      <div className="row player-controls">
        {[0, 0.25, 0.5, 0.75].map((f) => (
          <button key={f} className="secondary compact" onClick={() => seekFrac(f)}>
            {f * 100}%
          </button>
        ))}
        <button className="secondary compact" onClick={() => seekTo(pos - 10)}>
          -10s
        </button>
        <button className="compact" onClick={toggle}>
          {playing ? '⏸' : '▶'}
        </button>
        <button className="secondary compact" onClick={() => seekTo(pos + 10)}>
          +10s
        </button>
      </div>
    </div>
  );
}
