import React from 'react';
import { Link } from 'react-router';

export default function TracksIndexItem({ track, index }) {
    const classes = index < 3 ? 'index-counter top-three' : 'index-counter';
    return (
	<Link to={`/tracks/${track.id}/`}>
	  <li className="track-index-item">
	    <h2 className={classes}>{index + 1}</h2>
	    <div className="info-container">
	      <h1>{track.name}</h1>
	      <h3>{track.artist}</h3>
	    </div>
	  </li>
	</Link>
    );
}
