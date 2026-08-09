import React, { useEffect, useRef, useState } from 'react';
import { autoStart, loadAndPlay } from '../api/tidal.js';

const fmt = (s) =>
  `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

export default function Player({ track, controls }) {
  const [pos, setPos] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [preview, setPreview] = useState(false);
  const [loadErr, setLoadErr] = useState('');
  const barRef = useRef(null);
  const duration = track.duration || 0;

  // Auto-play each new card from the skip-intro position.
  useEffect(() => {
    let cancelled = false;
    setLoadErr('');
    setPos(autoStart(duration));
    (async () => {
      try {
        await loadAndPlay(track.trackId, autoStart(duration));
        if (!cancelled) setPlaying(true);
      } catch (e) {
        if (cancelled) return;
        setPlaying(false);
        const msg = String(e?.message || e);
        // Entitlement/rights failures → likely preview-only (pre-production app)
        if (/not.?allowed|entitle|right|forbidden|403/i.test(msg)) setPreview(true);
        else setLoadErr(msg);
      }
    })();
    return () => {
      cancelled = true;
      controls.pause();
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
    else controls.play();
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

  return (
    <div className="player card">
      {preview && (
        <div className="muted small">
          30s preview mode ·{' '}
          <a href={`tidal://track/${track.trackId}`}>open in Tidal</a>
        </div>
      )}
      {loadErr && <div className="error small">{loadErr}</div>}
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
