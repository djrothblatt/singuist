import React from 'react';
import { Editor, EditorState } from 'draft-js';

const _defaultTrackState = {
    selectedText: null,
    newAnnotation: {
	start: null,
	end: null,
	body: '',
	userId: null,
	trackId: null
    },
    annotationOpen: false
};

class TrackDetail extends React.Component {
    constructor(props) {
	super(props);
	this.state = _defaultTrackState;
	this.state.newAnnotation.trackId = this.props.params.trackId;
	if (this.props.session.currentUser) {
	    this.state.newAnnotation.userId = this.props.session.currentUser.id;
	}
	this.renderHeader = this.renderHeader.bind(this);
	this.renderLyrics = this.renderLyrics.bind(this);
	this.renderDescription = this.renderDescription.bind(this);

	this.handleSelection = this.handleSelection.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleAnnotationClick = this.handleAnnotationClick.bind(this);

	this.stringToSpans = this.stringToSpans.bind(this);

	this.openAnnotation = this.openAnnotation.bind(this);
	this.closeAnnotation = this.closeAnnotation.bind(this);
    }

    componentDidMount() {
	this.props.clearTrack();
	this.props.clearAnnotation();

	const trackId = this.props.params.trackId;
	this.props.fetchAnnotations(trackId);
	this.props.fetchTrack(trackId);
    }
    
    closeAnnotation() {
	this.setState(Object.assign(this.state, { annotationOpen: false }));
	this.props.clearAnnotation();
    }

    openAnnotation() {
	this.setState(Object.assign(this.state, { annotationOpen: true }));
    }

    handleSelection() {
	const selection = window.getSelection();
	const text = selection.toString().trim();

	if (text.length > 0) {
	    const lyrics = this.props.trackDetail.lyrics;
	    const index = lyrics.indexOf(text);
	    const end = text.length + index;

	    const newState = Object.assign(this.state);
	    newState.newAnnotation.start = index;
	    newState.newAnnotation.end = end;
	    newState.selectedText = text;
	    newState.annotationOpen = false;
	    this.props.clearAnnotation();
	    this.setState(newState);
	} else {
	    this.setState({ selectedText: null, annotationOpen: false });
	}
    }

    handleSubmit(e) {
	e.preventDefault();
	const newAnnotation = this.state.newAnnotation;
	newAnnotation.body = e.target.textContent;
	this.props.createAnnotation(this.state.newAnnotation);
	this.setState(_defaultTrackState);
    }

    handleAnnotationClick(e, annoId) {
	this.openAnnotation();
	this.props.fetchAnnotation(annoId);
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
	if (!this.props.trackDetail.lyrics) {
	    return <main className="detail-lyrics" />;
	}

	const lyrics = this.stringToSpans(this.props.trackDetail.lyrics);
	return (
	    <main className="detail-lyrics" onMouseUp={this.handleSelection}>
	      {lyrics}
	    </main>
	);
    }

    renderDescription() {
	const description = this.props.trackDetail.description;
	const currentUser = this.props.session.currentUser;

	if (this.state.selectedText) {
	    if (currentUser) {
		return (
		    <section className="detail-description annotation-form">
		      <h2>Start Translating!</h2>
		      <form className='annotation-form' onSubmit={this.handleSubmit}>
			<MyEditor />
			<input type="submit" value="Submit Annotation" />
		      </form>
		    </section>
		);
	    } else {
		return (
		    <section className="detail-description">
		      <h2>Sign up to annotate!</h2>
		    </section>
		);
	    }
	} else if (this.state.annotationOpen && this.props.annotation) {
	    return (
		<p className="detail-description" dangerouslySetInnerHTML={ { __html: this.props.annotation.body } } />
	    );
	} else {
	    return (
		<p className="detail-description" dangerouslySetInnerHTML={ { __html: description } }/>
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
