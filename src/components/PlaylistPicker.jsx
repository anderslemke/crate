import React, { useState } from 'react';
import { ROLES } from '../api/tidal.js';

// One role's playlist select, with an inline escape hatch for making a fresh
// playlist to fill the role.
function RoleRow({
  label,
  value,
  playlists,
  placeholder,
  allowNone = true,
  onPick,
  onCreate,
  children,
}) {
  const [creating, setCreating] = useState(false);
  const [name, setName] = useState('');

  const create = async () => {
    if (!name.trim()) return;
    await onCreate(name.trim());
    setName('');
    setCreating(false);
  };

  return (
    <>
      <div className="row">
        {label && <span className="muted small role-label">{label}</span>}
        <select value={value} onChange={(e) => onPick(e.target.value)}>
          <option value="" disabled={!allowNone}>
            {placeholder}
          </option>
          {playlists.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
              {p.numberOfItems != null ? ` (${p.numberOfItems})` : ''}
            </option>
          ))}
        </select>
        <button
          className="secondary compact"
          title={`New playlist for ${label || 'target'}`}
          onClick={() => setCreating((c) => !c)}
        >
          ＋
        </button>
        {children}
      </div>
      {creating && (
        <div className="row">
          <input
            type="text"
            placeholder={`New playlist name (${label || 'the occasion'})`}
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
    </>
  );
}

export default function PlaylistPicker({ playlists, roles, onPick, onCreate, count }) {
  const [open, setOpen] = useState(false);

  // A playlist can only hold one role at a time — draining what you're filing
  // into would just shuffle tracks in a circle.
  const others = (role) =>
    playlists.filter((p) => !ROLES.some((r) => r !== role && roles[r] === p.id));

  return (
    <div className="picker">
      <RoleRow
        value={roles.target}
        playlists={others('target')}
        placeholder="→ target playlist…"
        onPick={(id) => onPick('target', id)}
        onCreate={(name) => onCreate('target', name)}
      >
        <button
          className={`secondary compact${open ? ' pressed' : ''}`}
          title="Playlist settings"
          onClick={() => setOpen((o) => !o)}
        >
          ⚙
        </button>
        <span className="muted count">{count}</span>
      </RoleRow>
      {open && (
        <div className="card settings">
          <RoleRow
            label="Source"
            value={roles.source}
            playlists={others('source')}
            placeholder="pick the pool to review…"
            allowNone={false}
            onPick={(id) => onPick('source', id)}
            onCreate={(name) => onCreate('source', name)}
          />
          <RoleRow
            label="Dismiss"
            value={roles.dismiss}
            playlists={others('dismiss')}
            placeholder="don't keep dismissals"
            onPick={(id) => onPick('dismiss', id)}
            onCreate={(name) => onCreate('dismiss', name)}
          />
          <p className="muted small">
            Swipes take tracks out of the source either way: right files them in
            the target, left in the dismiss playlist — or nowhere, if you leave
            that one empty.
          </p>
        </div>
      )}
    </div>
  );
}
