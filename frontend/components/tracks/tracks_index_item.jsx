import React from 'react';

export default function TracksIndexItem({ track, index }) {
    return (
	<li>
	  <label>{index + 1}
	    <h1>{track.name}</h1>
	    <h2>{track.artist}</h2>
	  </label>	  
	</li>
    );
}
