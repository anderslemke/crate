import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  getClientId,
  initTidal,
  handleLoginRedirect,
  getUserCredentials,
  loadCrateConfig,
  setRoleId,
  getPlaylistItems,
  addToPlaylist,
  removeFromPlaylist,
  createPlaylist,
} from './api/tidal.js';
import TidalLogin from './components/TidalLogin.jsx';
import PlaylistPicker from './components/PlaylistPicker.jsx';
import Deck from './components/Deck.jsx';
import Player from './components/Player.jsx';

export default function App() {
  const [stage, setStage] = useState('boot'); // boot | setup | login | loading | ready
  const [creds, setCreds] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  // Which playlist plays each role. All three are settings, persisted by
  // api/tidal.js; source and dismiss come with defaults, target is a pick.
  const [roles, setRoles] = useState({ source: '', target: '', dismiss: '' });
  const [queue, setQueue] = useState([]); // pending items, [0] is the open card
  const [session, setSession] = useState({ added: 0, dismissed: 0 });
  const [undoStack, setUndoStack] = useState([]);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const credsRef = useRef(null);
  credsRef.current = creds;

  const boot = useCallback(async () => {
    setErr('');
    if (!getClientId()) return setStage('setup');
    try {
      await initTidal();
      await handleLoginRedirect();
      const c = await getUserCredentials();
      if (!c) return setStage('login');
      setCreds(c);
      setStage('loading');
      const { playlists: pls, source, dismiss, target } = await loadCrateConfig(c);
      setPlaylists(pls);
      setRoles({
        source: source?.id || '',
        target: target?.id || '',
        dismiss: dismiss?.id || '',
      });
    } catch (e) {
      setErr(String(e.message || e));
      setStage('login');
    }
  }, []);

  useEffect(() => {
    boot();
  }, [boot]);

  // The queue is simply the source playlist's contents, so it reloads whenever
  // the source does — at boot, and again if it's repointed in the settings.
  useEffect(() => {
    if (!creds) return;
    if (!roles.source) {
      setQueue([]);
      setStage('ready');
      return;
    }
    let live = true;
    setStage('loading');
    (async () => {
      try {
        const items = await getPlaylistItems(creds, roles.source);
        if (live) setQueue(items);
      } catch (e) {
        if (live) setErr(String(e.message || e));
      }
      if (live) setStage('ready');
    })();
    return () => {
      live = false;
    };
  }, [creds, roles.source]);

  const refresh = useCallback(async () => {
    if (!credsRef.current || !roles.source) return;
    setStage('loading');
    try {
      setQueue(await getPlaylistItems(credsRef.current, roles.source));
    } catch (e) {
      setErr(String(e.message || e));
    }
    setStage('ready');
  }, [roles.source]);

  const pickRole = (role, id) => {
    setErr('');
    setRoles((r) => ({ ...r, [role]: id }));
    setRoleId(role, id);
    // Undo replays a swipe against the playlists it came from, so history from
    // a different source is no longer safe to apply.
    if (role === 'source') setUndoStack([]);
  };

  const onCreatePlaylist = async (role, name) => {
    const p = await createPlaylist(creds, name);
    setPlaylists((ps) => [...ps, p]);
    pickRole(role, p.id);
  };

  // dir: 'left' (dismiss) | 'right' (add to target)
  // Optimistic: the deck advances instantly; Tidal calls run in the
  // background and a failure puts the card back on top.
  const swipe = useCallback(
    (dir) => {
      const item = queue[0];
      if (!item) return;
      if (dir === 'right' && !roles.target) {
        setErr('Pick a target playlist first');
        return;
      }
      // Right files the track in the target playlist, left in the dismiss one
      // (unless that role is empty); either way it leaves the source after.
      const sourceId = roles.source;
      const listId = dir === 'right' ? roles.target : roles.dismiss;
      setErr('');
      setQueue((q) => q.slice(1));
      setSession((s) =>
        dir === 'right'
          ? { ...s, added: s.added + 1 }
          : { ...s, dismissed: s.dismissed + 1 },
      );
      setUndoStack((u) => [{ item, dir, listId, sourceId }, ...u].slice(0, 10));
      const c = credsRef.current;
      (async () => {
        try {
          if (listId) {
            try {
              await addToPlaylist(c, listId, item.trackId);
            } catch (e) {
              // Already in that playlist counts as success.
              if (e.status !== 409 && e.status !== 400) throw e;
            }
          }
          await removeFromPlaylist(c, sourceId, item);
        } catch (e) {
          // Revert: card back on top, counters and undo history unwound.
          setErr(`${item.title}: ${String(e.message || e)}`);
          setQueue((q) => [item, ...q]);
          setSession((s) =>
            dir === 'right'
              ? { ...s, added: Math.max(0, s.added - 1) }
              : { ...s, dismissed: Math.max(0, s.dismissed - 1) },
          );
          setUndoStack((u) => u.filter((x) => x.item.itemId !== item.itemId));
        }
      })();
    },
    [queue, roles],
  );

  const undo = useCallback(async () => {
    const last = undoStack[0];
    if (!last || busy) return;
    setBusy(true);
    setErr('');
    const c = credsRef.current;
    try {
      await addToPlaylist(c, last.sourceId, last.item.trackId);
      if (last.listId) {
        // Best effort: pull it back out of wherever the swipe filed it.
        try {
          const items = await getPlaylistItems(c, last.listId);
          const found = items.find((i) => i.trackId === last.item.trackId);
          if (found) await removeFromPlaylist(c, last.listId, found);
        } catch {
          /* leave it there; the source re-add is what matters */
        }
      }
      // itemId changed on re-add; refetch to stay consistent.
      const items = await getPlaylistItems(c, last.sourceId);
      const restored = items.find((i) => i.trackId === last.item.trackId);
      setQueue((q) => (restored ? [restored, ...q] : q));
      setSession((s) =>
        last.dir === 'right'
          ? { ...s, added: Math.max(0, s.added - 1) }
          : { ...s, dismissed: Math.max(0, s.dismissed - 1) },
      );
      setUndoStack((u) => u.slice(1));
    } catch (e) {
      setErr(String(e.message || e));
    }
    setBusy(false);
  }, [undoStack, busy]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
      if (e.key === 'z' && (e.metaKey || e.ctrlKey)) undo();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [swipe, undo]);


  if (stage === 'boot') return <div className="app center muted">…</div>;
  if (stage === 'setup' || stage === 'login')
    return <TidalLogin mode={stage} onDone={boot} err={err} />;

  const sourceName = playlists.find((p) => p.id === roles.source)?.name;

  return (
    <div className="app">
      <PlaylistPicker
        playlists={playlists}
        roles={roles}
        onPick={pickRole}
        onCreate={onCreatePlaylist}
        count={queue.length}
      />
      {err && <div className="error">{err}</div>}
      {stage === 'loading' ? (
        <div className="center muted">Loading {sourceName || 'inbox'}…</div>
      ) : (
        <>
          <Deck
            queue={queue}
            onSwipe={swipe}
            session={session}
            onRefresh={refresh}
            canAdd={!!roles.target}
            sourceName={sourceName}
          />
          {queue[0] && (
            <Player track={queue[0]} next={queue[1]} creds={creds} />
          )}
          {undoStack.length > 0 && (
            <button className="secondary undo" onClick={undo} disabled={busy}>
              ↩︎ Undo {undoStack[0].dir === 'right' ? 'add' : 'dismiss'}
            </button>
          )}
          <button className="secondary refresh" onClick={() => window.location.reload()}>
            ↻ Refresh
          </button>
        </>
      )}
    </div>
  );
}
