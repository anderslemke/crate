import React, { useEffect, useRef, useState } from 'react';
import { getPreviewUrl } from '../api/tidal.js';

const fmt = (s) =>
  `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

// Playback is a 30s preview clip in a plain <audio> element.
//
// Not the embed: its play button is dead on iOS, and postMessage 'play' only
// synthesises a click on that same dead button. Not the player SDK either.
// listen.tidal.com plays fine on the same phone, so the platform was never
// the problem — an ordinary <audio> tag with an unencrypted AAC url is about
// as unobjectionable as audio gets.
//
// Nothing autoplays. The clip is fetched when the card opens so that the src
// is already loaded, which means the play() on your press runs synchronously
// inside the gesture — the only kind iOS honours.
export default function Player({ track, next, inboxId, creds }) {
  const audioRef = useRef(null);
  const [src, setSrc] = useState('');
  const [why, setWhy] = useState(''); // why there's no clip, when there isn't
  const [playing, setPlaying] = useState(false);
  const [pos, setPos] = useState(0);
  const [len, setLen] = useState(30);

  useEffect(() => {
    let cancelled = false;
    setSrc('');
    setWhy('');
    setPlaying(false);
    setPos(0);
    setLen(30);
    getPreviewUrl(creds, track.trackId).then(
      (url) => !cancelled && setSrc(url),
      (e) => !cancelled && setWhy(String(e?.message || e)),
    );
    return () => {
      cancelled = true;
    };
  }, [track.trackId, creds]);

  // Prefetch the next card's clip too, so its src is warm on arrival.
  useEffect(() => {
    if (next) getPreviewUrl(creds, next.trackId).catch(() => {});
  }, [next?.trackId, creds]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const toggle = () => {
      const el = audioRef.current;
      if (!el || !src) return;
      if (el.paused) {
        // Synchronous — no await between the gesture and play().
        el.play().then(
          () => setPlaying(true),
          (e) => setWhy(String(e?.message || e)),
        );
      } else {
        el.pause();
        setPlaying(false);
      }
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
  }, [src]);

  return (
    <div className="player card">
      {/* Cover art, and a tap target that opens the track in Tidal. It can't
          play here, so it isn't asked to. */}
      <iframe
        key={track.itemId}
        className="embed"
        title={`Tidal player ${track.title}`}
        src={`https://embed.tidal.com/tracks/${track.trackId}`}
        allow="encrypted-media; autoplay"
      />
      <audio
        ref={audioRef}
        src={src || undefined}
        preload="auto"
        playsInline
        onTimeUpdate={(e) => setPos(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setLen(e.currentTarget.duration || 30)}
        onEnded={() => setPlaying(false)}
      />
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: len ? `${(pos / len) * 100}%` : 0 }}
        />
      </div>
      <div className="row">
        <button
          className="secondary compact"
          disabled={!src}
          onClick={() => window.dispatchEvent(new Event('crate-toggle-play'))}
        >
          {playing ? '⏸' : '▶'}
        </button>
        <span className="stopwatch">
          {src ? `${fmt(pos)} / ${fmt(len)} preview` : why ? 'no clip' : '…'}
        </span>
      </div>
      {why && <div className="muted small">{why}</div>}
      {/* listen.tidal.com is confirmed to play full tracks on the phone, and
          stays in Safari, so getting back here is a tab switch. */}
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
