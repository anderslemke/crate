import React, { useEffect, useRef, useState } from 'react';
import { autoStart, isPlaybackGated, loadAndPlay } from '../api/tidal.js';

const fmt = (s) =>
  `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

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
    return () => window.removeEventListener('keydown', onKey);
  });

  // Both in-app backends refused (app not production-approved yet):
  // fall back to Tidal's official embed widget — plays previews with one tap.
  // The next card's iframe is kept mounted (hidden) so advancing the deck
  // swaps players instantly instead of loading from scratch.
  if (loadErr) {
    const embeds = [track, next].filter(Boolean);
    return (
      <div className="player card">
        {embeds.map((t) => (
          <iframe
            key={t.itemId}
            className="embed"
            style={t === track ? undefined : { display: 'none' }}
            title={`Tidal player ${t.title}`}
            src={`https://embed.tidal.com/tracks/${t.trackId}`}
            allow="encrypted-media; autoplay"
          />
        ))}
        <div className="row">
          <a className="small" href={`tidal://track/${track.trackId}`}>
            ▶ Open in Tidal app
          </a>
          <span className="muted small right">awaiting Tidal production access</span>
        </div>
      </div>
    );
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
