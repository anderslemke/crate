import React from 'react';

// Tidal's own embed widget, and nothing around it.
//
// There used to be an in-app player here, with a preview-clip fallback under
// it and an autoplay unlock under that. None of it can work: the player SDK
// needs MediaSource, which iOS Safari doesn't have, and the preview manifest
// API answers 403 unless the Tidal app is production-approved. What the
// machinery actually produced was a transport that looked like it worked.
// The widget's own controls are the ones that do.
//
// Current and next card are both mounted, so a swipe promotes an iframe that
// has already loaded. The outgoing one unmounts — which is also what stops
// its audio, no remote control needed.
export default function Player({ track, next }) {
  return (
    <div className="player card">
      {[track, next].filter(Boolean).map((t) => (
        <iframe
          key={t.itemId}
          className="embed"
          style={t === track ? undefined : { display: 'none' }}
          title={`Tidal player ${t.title}`}
          src={`https://embed.tidal.com/tracks/${t.trackId}`}
          allow="encrypted-media; autoplay"
        />
      ))}
      <a className="small right" href={`tidal://track/${track.trackId}`}>
        Open in Tidal app
      </a>
    </div>
  );
}
