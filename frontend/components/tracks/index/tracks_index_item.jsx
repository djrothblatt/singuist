import React from 'react';
import { Link } from 'react-router';

export default function TracksIndexItem({ track, index }) {
    return (
	<Link to={`/tracks/${track.id}/`}>
	  <li className="track-index-item">
	    <h2 className="index-counter">{index + 1}</h2>
	    <div className="info-container">
	      <h1>{track.name}</h1>
	      <h3>{track.artist}</h3>
	    </div>
	  </li>
	</Link>
    );
}
