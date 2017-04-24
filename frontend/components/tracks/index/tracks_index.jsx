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
	const tracks = Object.keys(this.props.tracks).map((id, index) => {
	    const track = this.props.tracks[id];
	    return <TracksIndexItem key={id} track={track} index={index}/>;
	});

	return (
	    <main className="tracks-main">
	      <h1 className="index-header">Top Songs</h1>
	      <ol className="track-index">
		{ tracks }
	      </ol>
	    </main>
	);
    }
}

export default TracksIndex;
