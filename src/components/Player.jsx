import React, { useEffect, useRef, useState } from 'react';
import { getPreviewUrl } from '../api/tidal.js';

const fmt = (s) =>
  `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

const EMBED_ORIGIN = 'https://embed.tidal.com';

// Playback is a 30s preview, by one of two routes.
//
// Preferred: our own <audio> tag with the clip url, which gives us a real
// progress bar and a transport we control. Fallback: tell Tidal's embed to
// play, which it does — but only from a press. Firing that command on card
// open is what made this look broken all day; without a gesture behind it
// iOS drops it silently. So nothing ever autoplays, by design and not just
// by preference.
//
// The clip url is fetched when the card opens and left loaded but unplayed,
// so play() on your press runs synchronously inside the gesture.
export default function Player({ track, next, inboxId, creds }) {
  const audioRef = useRef(null);
  const frames = useRef(new Map());
  const [src, setSrc] = useState('');
  const [why, setWhy] = useState('');
  const [playing, setPlaying] = useState(false);
  const [pos, setPos] = useState(0);
  const [len, setLen] = useState(30);

  const send = (itemId, commandName) => {
    frames.current
      .get(itemId)
      ?.contentWindow?.postMessage(JSON.stringify({ commandName }), EMBED_ORIGIN);
  };

  useEffect(() => {
    let cancelled = false;
    setSrc('');
    setWhy('');
    setPlaying(false);
    setPos(0);
    setLen(30);
    for (const id of frames.current.keys()) if (id !== track.itemId) send(id, 'pause');
    getPreviewUrl(creds, track.trackId).then(
      (url) => !cancelled && setSrc(url),
      (e) => !cancelled && setWhy(String(e?.message || e)),
    );
    return () => {
      cancelled = true;
    };
  }, [track.itemId, track.trackId, creds]); // eslint-disable-line react-hooks/exhaustive-deps

  // Warm the next card's clip so it's ready the moment you swipe.
  useEffect(() => {
    if (next) getPreviewUrl(creds, next.trackId).catch(() => {});
  }, [next?.trackId, creds]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const toggle = () => {
      const el = audioRef.current;
      if (src && el) {
        if (el.paused) {
          el.play().then(
            () => setPlaying(true),
            (e) => setWhy(String(e?.message || e)),
          );
        } else {
          el.pause();
          setPlaying(false);
        }
        return;
      }
      // No clip of our own — drive the embed instead. Same 30s preview.
      send(track.itemId, playing ? 'pause' : 'play');
      setPlaying((p) => !p);
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
  }, [src, playing, track.itemId]);

  return (
    <div className="player card">
      {[track, next].filter(Boolean).map((t) => (
        <iframe
          key={t.itemId}
          ref={(el) => {
            if (el) frames.current.set(t.itemId, el);
            else frames.current.delete(t.itemId);
          }}
          className="embed"
          style={t === track ? undefined : { display: 'none' }}
          title={`Tidal player ${t.title}`}
          src={`https://embed.tidal.com/tracks/${t.trackId}`}
          allow="encrypted-media; autoplay"
        />
      ))}
      <audio
        ref={audioRef}
        src={src || undefined}
        preload="auto"
        playsInline
        onTimeUpdate={(e) => setPos(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setLen(e.currentTarget.duration || 30)}
        onEnded={() => setPlaying(false)}
      />
      {/* Our own progress only means anything on our own clip; on the embed
          route its bar above is the real one. */}
      {src && (
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: len ? `${(pos / len) * 100}%` : 0 }}
          />
        </div>
      )}
      <div className="row">
        <button
          className="secondary compact"
          onClick={() => window.dispatchEvent(new Event('crate-toggle-play'))}
        >
          {playing ? '⏸' : '▶'}
        </button>
        <span className="stopwatch">
          {src ? `${fmt(pos)} / ${fmt(len)} preview` : '30s preview'}
        </span>
      </div>
      {/* listen.tidal.com plays full tracks on the phone and stays in Safari,
          so getting back to the deck is a tab switch. */}
      <div className="row player-links">
        {inboxId && (
          <a
            className="applink primary"
            href={`https://listen.tidal.com/playlist/${inboxId}`}
          >
            ▶ Play inbox in Tidal
          </a>
        )}
        <a
          className="applink right"
          href={`https://listen.tidal.com/track/${track.trackId}`}
        >
          This track
        </a>
      </div>
    </div>
  );
}
