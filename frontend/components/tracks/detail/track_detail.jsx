import React from 'react';
import { Editor, EditorState } from 'draft-js';

class TrackDetail extends React.Component {
    constructor(props) {
	super(props);
	this.state = _defaultTrackState;

	this.renderHeader = this.renderHeader.bind(this);
	this.renderLyrics = this.renderLyrics.bind(this);
	this.renderDescription = this.renderDescription.bind(this);

	this.handleSelection = this.handleSelection.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);

	this.stringToSpans = this.stringToSpans.bind(this);
    }

    componentDidMount() {
 	this.props.fetchTrack(this.props.params.trackId);
    }

    handleSelection() {
	const selection = window.getSelection();
	const text = selection.toString();
	if (text.length > 0) {
	    this.setState({ selectedText: text });
	} else {
	    this.setState({ selectedText: null });
	}
    }

    handleSubmit(e) {
	e.preventDefault();
	console.log(e.target.textContent);
	this.setState(_defaultTrackState);
    }

    stringToSpans(string) {
	const annotationStarts = this.props.annotations.map(anno => anno.startIndex);
	const annotationEnds = this.props.annotations.map(anno => anno.endIndex);
//	const annotationEnds = [3,5,7];
	let inAnnotation = false;
	let spans = [];

	let start = 0;
	const length = string.length;
	for (let position = 0; position < length; position++) {
	    if (inAnnotation) {
		if (annotationEnds.includes(position)) {
		    debugger
		    const span = <span className="annotation">{string.slice(start, position)}</span>;
		    spans.push(span);
		    start = position;
		    inAnnotation = false;
		}
	    } else if (annotationStarts.includes(position)) {
		const span = <span>{string.slice(start, position)}</span>;
		spans.push(span);
		start = position;
		inAnnotation = true;
	    }
	}
	if (spans.length === 0) {
	    spans = [string];
	}
	return spans;
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
//	const lyrics = this.stringToSpans(this.props.track.lyrics);
	const lyrics = this.props.track.lyrics;
	//	      {lyrics}
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

	if (this.state.selectedText) {
	    return (
		<section className="annotation-form">
		  <h2>Start Translating!</h2>
		  <form onSubmit={this.handleSubmit}>
		    <MyEditor />
		    <input type="submit" value="Submit Annotation" />
		  </form>
		</section>
	    );
	} else {
	    return (
		<p dangerouslySetInnerHTML={ { __html: description } }/>
	    );
	}
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

class MyEditor extends React.Component {
    constructor(props) {
	super(props);
	this.state = {body: EditorState.createEmpty()};
	this.onChange = this.onChange.bind(this);
    }

    onChange(body) {
	this.setState({body});
    }

    render() {
	return (
	    <Editor editorState={this.state.body} onChange={this.onChange}/>
	);
    }
}

const _defaultTrackState = {
    selectedText: null,
    annotation: {
	startIndex: null,
	endIndex: null,
	body: ''
    }
};


export default TrackDetail;
