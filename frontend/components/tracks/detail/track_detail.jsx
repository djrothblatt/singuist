import React from 'react';
import AnnotationContainer from '../../annotations/detail/annotation_container';
import AnnotationFormContainer from '../../annotations/annotation_form';
import * as UpvotesApiUtil from '../../../util/upvotes_api_util';

const _defaultTrackState = {
    selectedText: null,
    start: null,
    end: null,
    annotationOpen: false,
    editingAnnotation: false
};

class TrackDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = _defaultTrackState;
        const annotation = this.props.annotation;
        this.renderHeader = this.renderHeader.bind(this);
        this.renderLyrics = this.renderLyrics.bind(this);
        this.renderDescription = this.renderDescription.bind(this);

        this.handleSelection = this.handleSelection.bind(this);
        this.handleAnnotationClick = this.handleAnnotationClick.bind(this);

        this.stringToSpans = this.stringToSpans.bind(this);

        this.openAnnotation = this.openAnnotation.bind(this);
        this.closeAnnotation = this.closeAnnotation.bind(this);
        this.openEditing = this.openEditing.bind(this);
    }

    componentDidMount() {
        this.props.clearTrack();
        this.props.clearAnnotation();

        const trackId = this.props.params.trackId;
        this.props.fetchAnnotations(trackId);
        this.props.fetchTrack(trackId);
    }

    closeAnnotation() {
        this.setState({ annotationOpen: false });
        this.props.clearAnnotation();
    }

    openAnnotation() {
        this.setState({ annotationOpen: true });
    }

    openEditing() {
        this.setState({ editingAnnotation: true });
    }

    closeEditing() {
        this.setState({ editingAnnotation: false });
    }

    handleSelection() {
        this.closeAnnotation();
        this.closeEditing();
        const selection = window.getSelection();
        const text = selection.toString().trim();

        if (text.length > 0) {
            const lyrics = this.props.trackDetail.lyrics;
            const index = lyrics.indexOf(text);
            const end = text.length + index;

            const newState = Object.assign({}, this.state);
            newState.start = index;
            newState.end = end;
            newState.selectedText = text;

            newState.annotationOpen = false;
            this.props.clearAnnotation();

            this.setState(newState);
        } else {
            this.setState({
                selectedText: null,
                annotationOpen: false
            });
        }
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

        if (this.state.selectedText) {
            return (
                <AnnotationFormContainer
                   body={undefined}
                   editing={false}
                   trackId={this.props.params.trackId}
                   start={this.state.start}
                   end={this.state.end} />
            );
        } else if (this.state.annotationOpen && this.props.annotation) {
            if (this.state.editingAnnotation) {
                return (
                    <AnnotationFormContainer
                       body={$(this.props.annotation.body).text()}
                       editing={true}
                       trackId={this.props.params.trackId} />
                );
            } else {
                return (
                    <div className='detail-description annotation-display'>
                      <AnnotationContainer/>
                      <button
                         className='edit-button'
                         onClick={this.openEditing}>Edit</button>
                    </div>
                );
            }
        } else {
            return (
                <div>
                  <h3 className="start-highlighting">
                    Highlight a line of lyrics and start translating!
                  </h3>
                  <p className="detail-description" dangerouslySetInnerHTML={ { __html: description } }/>
                </div>
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

export default TrackDetail;
