import React, { useEffect, useRef, useState } from 'react';
import { autoStart, clearPlaybackGate, isPlaybackGated, loadAndPlay } from '../api/tidal.js';

const fmt = (s) =>
  `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

const EMBED_ORIGIN = 'https://embed.tidal.com';

// Tidal's embed accepts {commandName: "play"|"pause"} via postMessage and
// broadcasts {currentTime, duration, paused} back — no seek, sadly, so the
// jump buttons stay SDK-only. Next card's iframe is kept mounted (hidden) so
// promotion swaps players instantly.
function EmbedPlayer({ track, next, reason, onRetry }) {
  const refs = useRef(new Map());
  // Seed the length from the track we already know, so the readout isn't a
  // 0:30 guess until the first broadcast lands (and forever, on iOS).
  const [status, setStatus] = useState({
    currentTime: 0,
    duration: track.duration || 30,
    paused: true,
  });
  // iOS ignores a postMessage play(): the gesture has to happen inside the
  // iframe, so our ▶ can't reach it. A command that produces no status
  // broadcast didn't land — at which point we stop showing a transport we
  // don't drive and point at the button that does work.
  const [showTapHint, setShowTapHint] = useState(false);
  const [controllable, setControllable] = useState(true);
  const beats = useRef(0); // status broadcasts seen for this card
  // The user's intent, carried across swipes: playing → next card auto-plays,
  // paused → next card stays quiet.
  const wantPlay = useRef(true);

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
        // It answered, so our commands do land here — trust the transport.
        beats.current += 1;
        setControllable(true);
        setShowTapHint(false);
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

  // Card change: silence the outgoing embed; start the incoming one only if
  // the user was in a playing state. (The swipe itself is the user gesture
  // that lets autoplay through.) Show it as paused until a broadcast says
  // otherwise — on iOS the play command is ignored, and claiming ⏸ over a
  // silent embed is worse than a stale ▶ for a moment.
  useEffect(() => {
    setStatus({ currentTime: 0, duration: track.duration || 30, paused: true });
    for (const id of refs.current.keys()) if (id !== track.itemId) send(id, 'pause');
    beats.current = 0;
    setShowTapHint(false);
    if (!wantPlay.current) return undefined;
    send(track.itemId, 'play');
    // Told it to play and heard nothing back: the command didn't land.
    const t = setTimeout(() => {
      if (beats.current === 0) {
        setControllable(false);
        setShowTapHint(true);
      }
    }, 2500);
    return () => clearTimeout(t);
  }, [track.itemId]);

  // Optimistic toggle: don't rely on the embed's status broadcasts to know
  // whether it's playing — flip our own state and send the matching command;
  // incoming broadcasts (when they arrive) overwrite it with the truth.
  useEffect(() => {
    // ...but a play we never hear back from was optimism about nothing: put
    // the button back the way it was instead of showing ⏸ over silence.
    const verify = () => {
      const before = beats.current;
      setTimeout(() => {
        if (beats.current !== before) return;
        setControllable(false);
        setShowTapHint(true);
        setStatus((s) => ({ ...s, paused: true }));
      }, 1500);
    };
    const toggle = () => {
      setStatus((s) => {
        const starting = s.paused;
        send(track.itemId, starting ? 'play' : 'pause');
        wantPlay.current = starting;
        if (starting) verify();
        return { ...s, paused: !starting };
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
  }, [track.itemId]);

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
          onLoad={() => t === track && wantPlay.current && send(t.itemId, 'play')}
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
        {controllable && (
          <button
            className="secondary compact"
            onClick={() => window.dispatchEvent(new Event('crate-toggle-play'))}
          >
            {status.paused ? '▶' : '⏸'}
          </button>
        )}
        <span className="stopwatch">
          {fmt(status.currentTime)} / {fmt(status.duration)}
        </span>
        <a className="small right" href={`tidal://track/${track.trackId}`}>
          Open in Tidal app
        </a>
      </div>
      {showTapHint && (
        <div className="muted small">↑ Tap ▶ in the Tidal player to start</div>
      )}
      {/* Why you're looking at an iframe instead of the real player. */}
      <div className="row muted small">
        <span className="embed-reason">Embed mode — {String(reason).slice(0, 200)}</span>
        {onRetry && (
          <button className="secondary compact right" onClick={onRetry}>
            ↻ Retry
          </button>
        )}
      </div>
    </div>
  );
}

export default function Player({ track, next, controls }) {
  const [pos, setPos] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [preview, setPreview] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [loadErr, setLoadErr] = useState('');
  const [attempt, setAttempt] = useState(0); // bumped by "try again"
  const barRef = useRef(null);
  // Preview clips are ~30s regardless of the track's real length.
  const duration = preview ? 30 : track.duration || 0;

  // Auto-play each new card from the skip-intro position — unless playback
  // is known to be gated, in which case we stay in embed mode without the
  // 403 round-trips (keeps the preloaded iframes mounted).
  useEffect(() => {
    if (isPlaybackGated()) {
      setLoadErr('Tidal serves in-page audio only to approved apps (403)');
      return undefined;
    }
    let cancelled = false;
    setLoadErr('');
    setBlocked(false);
    // From the track's own length, not `duration` — that still reads 30s
    // from the previous card if it fell back to a preview clip.
    const start = autoStart(track.duration || 0);
    setPos(start);
    (async () => {
      try {
        const r = await loadAndPlay(track.trackId, start);
        if (cancelled || r.stale) return;
        setPreview(r.mode === 'preview');
        setBlocked(!!r.blocked);
        setPlaying(!r.blocked);
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
  }, [track.trackId, attempt]); // eslint-disable-line react-hooks/exhaustive-deps

  // Poll position while playing. Not in embed mode: there's no in-app player
  // to ask, and the embed keeps its own clock.
  useEffect(() => {
    if (loadErr) return undefined;
    const t = setInterval(() => {
      setPos(controls.position() || 0);
      const live = controls.state() === 'PLAYING';
      setPlaying(live);
      if (live) setBlocked(false);
    }, 400);
    return () => clearInterval(t);
  }, [controls, loadErr]);

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
    else
      Promise.resolve(controls.play())
        .then(() => setBlocked(false))
        .catch((e) => setLoadErr(String(e?.message || e)));
  };

  // Keyboard: space toggles, 1-4 jump, ,/. nudge ±10s
  //
  // Only while the in-app player is the one you're looking at. In embed mode
  // the EmbedPlayer owns the transport, and this listener staying alive meant
  // every play toggle also hit the dead SDK — whose "No active player" then
  // overwrote the real reason on screen.
  useEffect(() => {
    if (loadErr) return undefined;
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
    return (
      <EmbedPlayer
        track={track}
        next={next}
        reason={loadErr}
        // Retry is a full re-probe: it forgets the remembered gate too, so
        // it's the way back in if Tidal ever approves the app.
        onRetry={() => {
          clearPlaybackGate();
          setAttempt((a) => a + 1);
        }}
      />
    );
  }

  return (
    <div className="player card">
      {preview && <div className="muted small">30s preview mode</div>}
      {blocked && (
        <div className="muted small">
          Autoplay blocked by the browser — hit ▶ or tap the card to start
        </div>
      )}
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
