import React from 'react';

class TrackDetail extends React.Component {
    constructor(props) {
	super(props);
	this.renderHeader = this.renderHeader.bind(this);
	this.renderLyrics = this.renderLyrics.bind(this);
	this.renderDescription = this.renderDescription.bind(this);
    }

    renderHeader() {
	return (
	    <header className="header">
	      <h1 className="name">{this.props.track.name}</h1>
	      <h2 className="artist">{this.props.track.artist}</h2>
	      <h3 className="language">Language: {this.props.track.language}</h3>
	    </header>
	);
    }

    renderLyrics() {
	return (
	    <main className="lyrics">
	      {this.props.track.lyrics}
	    </main>
	);
    }

    renderDescription() {
	return (
	    <aside className="description">
	      {this.props.track.description}
	    </aside>
	);
    }

    render() {
	return (
	    <section className="track">
	      {this.renderHeader()}
	      {this.renderLyrics()}
	      {this.renderDescription()}
	    </section>
	);
    }
}

export default TrackDetail;
