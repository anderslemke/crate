import React, { useEffect, useRef, useState } from 'react';

const FLING_THRESHOLD = 90; // px of horizontal drag that commits a swipe

export default function Deck({ queue, busy, onSwipe, session, onRefresh, canAdd }) {
  const [drag, setDrag] = useState(null); // {dx, dy} while dragging
  const [fling, setFling] = useState(null); // 'left' | 'right' during exit anim
  const start = useRef(null);
  const top = queue[0];
  const next = queue[1];

  // New top card: reset any leftover animation state.
  useEffect(() => {
    setFling(null);
    setDrag(null);
  }, [top?.itemId]);

  if (!top) {
    return (
      <div className="card deck-empty">
        <p className="big-emoji">📭</p>
        <p>Inbox empty.</p>
        <p className="muted">
          Add tracks to “Crate Inbox” from the Tidal app, or ask Claude to trawl
          some charts.
        </p>
        <p className="muted small">
          This session: {session.added} added · {session.dismissed} dismissed
        </p>
        <button className="secondary" onClick={onRefresh}>
          Refresh
        </button>
      </div>
    );
  }

  const onPointerDown = (e) => {
    if (busy || fling) return;
    start.current = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!start.current) return;
    setDrag({ dx: e.clientX - start.current.x, dy: e.clientY - start.current.y });
  };

  const onPointerUp = () => {
    if (!start.current) return;
    const dx = drag?.dx || 0;
    start.current = null;
    if (Math.abs(dx) > FLING_THRESHOLD) {
      const dir = dx > 0 ? 'right' : 'left';
      if (dir === 'right' && !canAdd) {
        setDrag(null);
        return;
      }
      setFling(dir);
      setTimeout(() => onSwipe(dir), 180);
    } else {
      setDrag(null);
    }
  };

  const dx = fling ? (fling === 'right' ? 600 : -600) : drag?.dx || 0;
  const style = {
    transform: `translateX(${dx}px) rotate(${dx / 20}deg)`,
    transition: drag ? 'none' : 'transform 0.18s ease-out',
    opacity: fling ? 0 : 1,
  };
  const verdict =
    Math.abs(dx) > FLING_THRESHOLD / 2 ? (dx > 0 ? 'add' : 'dismiss') : null;

  return (
    <div className="deck">
      {next && (
        <div className="card track-card behind">
          <div className="track-title">{next.title}</div>
          <div className="muted">{next.artist}</div>
        </div>
      )}
      <div
        className={`card track-card top ${verdict || ''}`}
        style={style}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {verdict === 'add' && <div className="stamp stamp-add">ADD</div>}
        {verdict === 'dismiss' && <div className="stamp stamp-dismiss">NOPE</div>}
        <div className="track-title">{top.title}</div>
        <div className="track-artist">{top.artist}</div>
        <div className="muted">
          {top.album}
          {top.duration
            ? ` · ${Math.floor(top.duration / 60)}:${String(top.duration % 60).padStart(2, '0')}`
            : ''}
        </div>
        <div className="swipe-hints muted small">
          ← dismiss · add →{canAdd ? '' : ' (pick a playlist)'}
        </div>
      </div>
      <div className="deck-buttons row">
        <button className="secondary half" disabled={busy} onClick={() => onSwipe('left')}>
          ✕ Dismiss
        </button>
        <button className="half" disabled={busy || !canAdd} onClick={() => onSwipe('right')}>
          ♥ Add
        </button>
      </div>
    </div>
  );
}
