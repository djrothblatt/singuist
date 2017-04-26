import React from 'react';
import { Editor, EditorState } from 'draft-js';

const _defaultTrackState = {
    selectedText: null,
    annotation: {
	start: null,
	end: null,
	body: '',
	userId: ''
    },
    annotationOpen: false
};

class TrackDetail extends React.Component {
    constructor(props) {
	super(props);
	this.state = _defaultTrackState;
	this.state.trackId = this.props.params.trackId;

	this.renderHeader = this.renderHeader.bind(this);
	this.renderLyrics = this.renderLyrics.bind(this);
	this.renderDescription = this.renderDescription.bind(this);

	this.handleSelection = this.handleSelection.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);

	this.stringToSpans = this.stringToSpans.bind(this);
    }

    componentDidMount() {
	const trackId = this.props.params.trackId;
	this.props.clearAnnotation();
	this.props.fetchAnnotations(trackId);
	this.props.fetchTrack(trackId);
    }

    closeAnnotation() {
	this.setState(Object.assign(this.state, { annotationOpen: false }));
    }

    openAnnotation() {
	this.setState(Object.assign(this.state, { annotationOpen: true }));
    }

    handleSelection() {
	this.props.clearAnnotation();
	this.closeAnnotation();
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

    handleAnnotationClick(e, annoId) {
	this.props.fetchAnnotation(annoId);
	this.openAnnotation();
    }

    stringToSpans(string) {
	const annotationStarts = {};
	const annotationEnds = {};
	this.props.annotations.forEach(anno => {
	    annotationStarts[anno.start] = anno.id;
	    annotationEnds[anno.end] = anno.id;
	});

	let inAnnotation = false;
	let spans = [];
	let start = 0;
	const length = string.length;

	for (let position = 0; position < length; position++) {
	    if (inAnnotation) {
		const annoId = annotationEnds[position];
		if (annoId) {
		    const span = (
			<span
			   key={position}
			   className="annotation"
			   onClick={(e) => this.handleAnnotationClick(e, annoId)}
			  dangerouslySetInnerHTML={ { __html: string.slice(start, position) } }/>
		    );
		    spans.push(span);
		    start = position;
		    inAnnotation = false;
		}
	    } else if (annotationStarts[position]) {
		const span = (
		    <span key={position} dangerouslySetInnerHTML={ { __html: string.slice(start, position) } }/>
		);
		spans.push(span);
		start = position;
		inAnnotation = true;
	    }
	}

	spans.push(<span key={length} dangerouslySetInnerHTML={ { __html: string.slice(start, length)}}/>);
	return spans;
    }

    renderHeader() {
	return (
	    <header className="detail-header">
	      <h1 className="name">{this.props.trackDetail.name}</h1>
	      <h2 className="artist">{this.props.trackDetail.artist}</h2>
	      <h3 className="language">{this.props.trackDetail.language}</h3>
	    </header>
	);
    }

    renderLyrics() {
	const lyrics = this.stringToSpans(this.props.trackDetail.lyrics);
	return (
	    <main className="detail-lyrics" onMouseUp={this.handleSelection}>
	      {lyrics}
	    </main>
	);
    }

    renderDescription() {
	const description = this.props.trackDetail.description;

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
	} else if (this.state.annotationOpen && this.props.annotation) {
	    return (
		<p dangerouslySetInnerHTML={ { __html: this.props.annotation.body } } />
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

export default TrackDetail;
