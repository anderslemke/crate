import React from 'react';

// Tidal's own embed widget, and nothing around it.
//
// There used to be an in-app player here, with a preview-clip fallback under
// it and an autoplay unlock under that. None of it can work: Tidal serves
// playback only through its SDKs, that SDK needs MediaSource (absent in iOS
// Safari), and the preview endpoint the fallback used sits outside the
// developer platform and 403s for everyone. What the machinery produced was
// a transport that looked like it worked.
//
// Current and next card are both mounted, so a swipe promotes an iframe that
// has already loaded. The outgoing one unmounts — which is also what stops
// its audio, no remote control needed.
export default function Player({ track, next, inboxId }) {
  return (
    <div className="player card">
      {[track, next].filter(Boolean).map((t) => (
        <iframe
          key={t.itemId}
          className="embed"
          style={t === track ? undefined : { display: 'none' }}
          title={`Tidal player ${t.title}`}
          src={`https://embed.tidal.com/tracks/${t.trackId}`}
          // As Tidal documents it, plus autoplay.
          allow="autoplay *; encrypted-media *; fullscreen *; web-share *;"
        />
      ))}
      {/* The native app is the one thing that reliably plays on a phone: the
          track for a quick listen, the inbox to put this whole review session
          on in the background and just swipe along. */}
      <div className="row player-links">
        <a className="applink" href={`tidal://track/${track.trackId}`}>
          ▶ This track in Tidal
        </a>
        {inboxId && (
          <a className="applink right" href={`tidal://playlist/${inboxId}`}>
            Inbox in Tidal
          </a>
        )}
      </div>
    </div>
  );
}
