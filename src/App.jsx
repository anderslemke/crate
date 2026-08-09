import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  getClientId,
  initTidal,
  handleLoginRedirect,
  getUserCredentials,
  ensureCratePlaylists,
  getPlaylistItems,
  addToPlaylist,
  removeFromPlaylist,
  createPlaylist,
  playerControls,
} from './api/tidal.js';
import TidalLogin from './components/TidalLogin.jsx';
import PlaylistPicker from './components/PlaylistPicker.jsx';
import Deck from './components/Deck.jsx';
import Player from './components/Player.jsx';

export default function App() {
  const [stage, setStage] = useState('boot'); // boot | setup | login | loading | ready
  const [creds, setCreds] = useState(null);
  const [inbox, setInbox] = useState(null);
  const [dismissedList, setDismissedList] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const [targetId, setTargetId] = useState(localStorage.getItem('crate_playlist') || '');
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
      const { inbox: ib, dismissed: dl, playlists: pls } = await ensureCratePlaylists(c);
      setInbox(ib);
      setDismissedList(dl);
      setPlaylists(pls);
      const items = await getPlaylistItems(c, ib.id);
      setQueue(items);
      setStage('ready');
    } catch (e) {
      setErr(String(e.message || e));
      setStage('login');
    }
  }, []);

  useEffect(() => {
    boot();
  }, [boot]);

  const refresh = useCallback(async () => {
    if (!credsRef.current || !inbox) return;
    setStage('loading');
    try {
      setQueue(await getPlaylistItems(credsRef.current, inbox.id));
    } catch (e) {
      setErr(String(e.message || e));
    }
    setStage('ready');
  }, [inbox]);

  const pickTarget = (id) => {
    setTargetId(id);
    localStorage.setItem('crate_playlist', id);
  };

  const onCreatePlaylist = async (name) => {
    const p = await createPlaylist(creds, name);
    setPlaylists((ps) => [...ps, p]);
    pickTarget(p.id);
  };

  // dir: 'left' (dismiss) | 'right' (add to target)
  // Optimistic: the deck advances instantly; Tidal calls run in the
  // background and a failure puts the card back on top.
  const swipe = useCallback(
    (dir) => {
      const item = queue[0];
      if (!item) return;
      if (dir === 'right' && !targetId) {
        setErr('Pick a target playlist first');
        return;
      }
      // Right files the track in the target playlist, left in the dismissed
      // one; either way it leaves the inbox afterwards.
      const listId = dir === 'right' ? targetId : dismissedList?.id;
      setErr('');
      setQueue((q) => q.slice(1));
      setSession((s) =>
        dir === 'right'
          ? { ...s, added: s.added + 1 }
          : { ...s, dismissed: s.dismissed + 1 },
      );
      setUndoStack((u) => [{ item, dir, listId }, ...u].slice(0, 10));
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
          await removeFromPlaylist(c, inbox.id, item);
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
    [queue, targetId, inbox, dismissedList],
  );

  const undo = useCallback(async () => {
    const last = undoStack[0];
    if (!last || busy) return;
    setBusy(true);
    setErr('');
    const c = credsRef.current;
    try {
      await addToPlaylist(c, inbox.id, last.item.trackId);
      if (last.listId) {
        // Best effort: pull it back out of wherever the swipe filed it.
        try {
          const items = await getPlaylistItems(c, last.listId);
          const found = items.find((i) => i.trackId === last.item.trackId);
          if (found) await removeFromPlaylist(c, last.listId, found);
        } catch {
          /* leave it there; the inbox re-add is what matters */
        }
      }
      // itemId changed on re-add; refetch to stay consistent.
      const items = await getPlaylistItems(c, inbox.id);
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
  }, [undoStack, busy, inbox]);

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

  return (
    <div className="app">
      <PlaylistPicker
        playlists={playlists}
        targetId={targetId}
        onPick={pickTarget}
        onCreate={onCreatePlaylist}
        inboxCount={queue.length}
      />
      {err && <div className="error">{err}</div>}
      {stage === 'loading' ? (
        <div className="center muted">Loading inbox…</div>
      ) : (
        <>
          <Deck
            queue={queue}
            onSwipe={swipe}
            session={session}
            onRefresh={refresh}
            canAdd={!!targetId}
          />
          {queue[0] && (
            <Player track={queue[0]} next={queue[1]} controls={playerControls} />
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
