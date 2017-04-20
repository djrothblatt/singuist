import React from 'react';
import TracksIndexItem from './tracks_index_item';

class TracksIndex extends React.Component {
    constructor(props) {
	super(props);
    }

    componentDidMount() {
	this.props.fetchTracks();
    }

    render() {
	const tracks = Object.keys(this.props.tracks).map(id => {
	    const track = this.props.tracks[id];
	    return <TracksIndexItem key={id} track={track} />
	});

	return (
	    <ul>
	      { tracks }
	    </ul>
	);
    }
}

export default TracksIndex;
