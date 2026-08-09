import React, { useState } from 'react';

export default function PlaylistPicker({ playlists, targetId, onPick, onCreate, inboxCount }) {
  const [creating, setCreating] = useState(false);
  const [name, setName] = useState('');

  const create = async () => {
    if (!name.trim()) return;
    await onCreate(name.trim());
    setName('');
    setCreating(false);
  };

  return (
    <div className="picker">
      <div className="row">
        <select value={targetId} onChange={(e) => onPick(e.target.value)}>
          <option value="">→ target playlist…</option>
          {playlists.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
              {p.numberOfItems != null ? ` (${p.numberOfItems})` : ''}
            </option>
          ))}
        </select>
        <button className="secondary compact" onClick={() => setCreating((c) => !c)}>
          ＋
        </button>
        <span className="muted count">{inboxCount}</span>
      </div>
      {creating && (
        <div className="row">
          <input
            type="text"
            placeholder="New playlist name (the occasion)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && create()}
            autoFocus
          />
          <button className="compact" onClick={create}>
            Create
          </button>
        </div>
      )}
    </div>
  );
}
