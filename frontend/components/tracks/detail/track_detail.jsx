import React from 'react';
import AnnotationForm from '../../annotations/annotation_form';
import Quill from 'quill';

class TrackDetail extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    selectedText: null
	};
	this.renderHeader = this.renderHeader.bind(this);
	this.renderLyrics = this.renderLyrics.bind(this);
	this.renderDescription = this.renderDescription.bind(this);
	this.handleSelection = this.handleSelection.bind(this);
    }

    componentDidMount() {
	this.props.fetchTrack(this.props.params.trackId);
    }

    handleSelection() {
	const selection = window.getSelection();
	const text = selection.toString();
	if (text.length > 0) {
	    this.setState({ selectedText: text });
	    this.quill = new Quill('.annotator-container', {
		placeholder: 'Translate this song!',
		theme: 'snow'
	    });
	} else {
	    this.setState({ selectedText: null });
	}
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
	const lyrics = this.props.track.lyrics;
	return (
	    <main className="detail-lyrics">
	      <div
		 dangerouslySetInnerHTML={ { __html: lyrics } }
		 onMouseUp={this.handleSelection}/>
	    </main>
	);
    }

    renderDescription() {
	const description = this.props.track.description;
	const content = this.state.selectedText ? <div className="annotator-container" /> : <div dangerouslySetInnerHTML={ { __html: description } }/>;
	  
	return (
	    <aside className="detail-description">
	      <div className="annotator-container">
		<p>Edit here!</p>
		<p>This is editable <b>text</b></p>
	      </div>
	    </aside>
	);
    }
	      // <div dangerouslySetInnerHTML={ { __html: description } }/>
	      // <AnnotationForm />

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
