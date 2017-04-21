import React from 'react';
import { Link } from 'react-router';

export default function TracksIndexItem({ track, index }) {
    return (
	<li>
	  <label>{index + 1}
	    <h1><Link to={`/tracks/${track.id}/`}>{track.name}</Link></h1>
	    <h2>{track.artist}</h2>
	  </label>	  
	</li>
    );
}
