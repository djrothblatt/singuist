import React from 'react';
import { Link } from 'react-router';

export default function TracksIndexItem({ track, index }) {
    return (
	<li className="track-index-item">
	  <label>{index + 1}
	    <h1><Link to={`/tracks/${track.id}/`}>{track.name}</Link></h1>
	    <h2>{track.artist}</h2>
	  </label>	  
	</li>
    );
}
