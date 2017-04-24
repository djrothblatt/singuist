import React from 'react';

class TrackDetail extends React.Component {
    constructor(props) {
	super(props);
	this.renderHeader = this.renderHeader.bind(this);
	this.renderLyrics = this.renderLyrics.bind(this);
	this.renderDescription = this.renderDescription.bind(this);
    }

    componentDidMount() {
	this.props.fetchTrack(this.props.params.trackId);
    }
    
    renderHeader() {
	return (
	    <header className="detail-header">
	      <h1 className="name">{this.props.track.name}</h1>
	      <h2 className="artist">{this.props.track.artist}</h2>
	      <h3 className="language">{this.props.track.language}</h3>
	    </header>
	);
    }

    renderLyrics() {
	return (
	    <main className="detail-lyrics">
	      <p>{this.props.track.lyrics}</p>
	    </main>
	);
    }
    renderDescription() {
	return (
	    <aside className="detail-description">
	      {this.props.track.description}
	    </aside>
	);
    }

    render() {
	return (
	    <section className="track-detail">
	      {this.renderHeader()}
	      <section className="body">
		{this.renderLyrics()}
		{this.renderDescription()}
	      </section>
	    </section>
	);
    }
}

export default TrackDetail;
