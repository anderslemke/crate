import React, { useEffect, useRef, useState } from 'react';

const FLING_THRESHOLD = 90; // px of horizontal drag that commits a swipe

// Full card content — identical for top/behind/leaving so promotion is a pure
// CSS transform transition, never a content swap.
function CardBody({ track, canAdd }) {
  return (
    <>
      <div className="track-title">{track.title}</div>
      <div className="track-artist">{track.artist}</div>
      <div className="muted">
        {track.album}
        {track.duration
          ? ` · ${Math.floor(track.duration / 60)}:${String(track.duration % 60).padStart(2, '0')}`
          : ''}
      </div>
      <div className="swipe-hints muted small">
        ← dismiss · add →{canAdd ? '' : ' (pick a playlist)'}
      </div>
    </>
  );
}

export default function Deck({ queue, onSwipe, session, onRefresh, canAdd }) {
  const [drag, setDrag] = useState(null); // {dx, dy} while dragging
  const [leaving, setLeaving] = useState(null); // {item, dir} during exit anim
  const start = useRef(null);
  const top = queue[0];
  const next = queue[1];

  useEffect(() => setDrag(null), [top?.itemId]);

  // All swipe sources (drag, buttons, arrow keys) funnel through here:
  // detach the top card into a fling animation and advance the deck NOW —
  // the API work happens in the background (App reverts on failure).
  const commit = (dir) => {
    if (!top || leaving) return;
    if (dir === 'right' && !canAdd) return;
    setLeaving({ item: top, dir });
    setDrag(null);
    onSwipe(dir);
    setTimeout(() => setLeaving(null), 240);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
      if (e.key === 'ArrowLeft') commit('left');
      else if (e.key === 'ArrowRight') commit('right');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  if (!top && !leaving) {
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
    if (leaving) return;
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
      commit(dx > 0 ? 'right' : 'left');
    } else {
      setDrag(null);
    }
  };

  const dx = drag?.dx || 0;
  const topStyle = {
    transform: dx ? `translateX(${dx}px) rotate(${dx / 20}deg)` : '',
    transition: drag ? 'none' : undefined,
  };
  const verdict =
    Math.abs(dx) > FLING_THRESHOLD / 2 ? (dx > 0 ? 'add' : 'dismiss') : null;

  return (
    <div className="deck">
      <div className="deck-stack">
        {next && (
          <div key={next.itemId} className="card track-card behind">
            <CardBody track={next} canAdd={canAdd} />
          </div>
        )}
        {top && (
          <div
            key={top.itemId}
            className={`card track-card top ${verdict || ''}`}
            style={topStyle}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            {verdict === 'add' && <div className="stamp stamp-add">ADD</div>}
            {verdict === 'dismiss' && <div className="stamp stamp-dismiss">NOPE</div>}
            <CardBody track={top} canAdd={canAdd} />
          </div>
        )}
        {leaving && (
          <div
            key={`leaving-${leaving.item.itemId}`}
            className={`card track-card fling-${leaving.dir}`}
          >
            <CardBody track={leaving.item} canAdd={canAdd} />
          </div>
        )}
      </div>
      <div className="deck-buttons row">
        <button className="secondary half" disabled={!top} onClick={() => commit('left')}>
          ✕ Dismiss
        </button>
        <button className="half" disabled={!top || !canAdd} onClick={() => commit('right')}>
          ♥ Add
        </button>
      </div>
    </div>
  );
}
