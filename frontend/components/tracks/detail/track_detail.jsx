import React from 'react';
import { Link } from 'react-router';
import ClickOutHandler from 'react-onclickout';
import AnnotationContainer from '../../annotations/detail/annotation_container';

const _defaultTrackState = {
    selection: null,
    selectedText: null,
    start: null,
    end: null
};

class TrackDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = _defaultTrackState;
        this.renderHeader = this.renderHeader.bind(this);
        this.renderLyrics = this.renderLyrics.bind(this);
        this.renderDescription = this.renderDescription.bind(this);

        this.handleSelection = this.handleSelection.bind(this);

        this.stringToSpans = this.stringToSpans.bind(this);
    }

    componentDidMount() {
        const trackId = this.props.params.trackId;
        this.props.fetchAnnotations(trackId);
        this.props.fetchTrack(trackId);
    }

    componentWillUnmount() {
        this.props.clearTrack();
        this.props.clearAnnotation();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.annotations.length !== nextProps.annotations.length) {
            debugger
            this.setState(_defaultTrackState);
            this.props.fetchAnnotations(this.props.params.trackId);
        }
    }

    handleSelection() {
        const selection = window.getSelection(),
              text = selection.toString().trim();

        if (text.length > 0) {
            const lyrics = this.props.trackDetail.lyrics,
                  index = lyrics.indexOf(text),
                  end = text.length + index,
                  newState = Object.assign({}, this.state, {
                      selectedText: text,
                      selection,
                      start: index,
                      end
                  });
            this.setState(newState);
            this.props.clearAnnotation();
        } else {
            const newState = Object.assign({}, this.state, {
                selectedText: null
            });
            this.setState(newState);
        }
    }

    stringToSpans(string) {
        const annotationStarts = {},
              annotationEnds = {},
              length = string.length,
              trackId = this.props.params.trackId;
        this.props.annotations.forEach(anno => {
            annotationStarts[anno.start] = anno.id;
            annotationEnds[anno.end] = anno.id;
        });

        annotationStarts[this.state.start] = null;
        annotationEnds[this.state.end] = null;

        let inAnnotation = false,
            spans = [],
            body = '',
            position;
        function toggleInAnnotation() {
            inAnnotation = !inAnnotation;
            body = '';
        }
        function isValidAnnotation(annotationId) {
            return annotationId || annotationId === null;
        }
        function addressOf(annotationId) {
            return annotationId ?
                `/tracks/${trackId}/annotations/${annotationId}/` :
                `/tracks/${trackId}/new-annotation/`;
        }

        for (position = 0; position < length; position++) {
            if (inAnnotation) {
                const annoId = annotationEnds[position];

                if (isValidAnnotation(annoId)) {
                    const span = (
                        <Link to={addressOf(annoId)}>
                          <span
                            key={position}
                            value={annoId}
                            className="annotation"
                            dangerouslySetInnerHTML={ { __html: body } }/>
                        </Link>
                    );
                    spans.push(span);
                    toggleInAnnotation();
                }
            } else if (isValidAnnotation(annotationStarts[position])) {
                const span = (
                    <span key={position || 0}
                          dangerouslySetInnerHTML={ { __html: body } }/>
                );
                spans.push(span);
                toggleInAnnotation();
            }
            body += string[position];
        }

        spans.push(<span key={length} dangerouslySetInnerHTML={ { __html: body }}/>);
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

        if (this.props.children) {
            const childrenWithStartAndEnd = React.Children.map(
                this.props.children, child => React.cloneElement(child, {
                    start: this.state.start,
                    end: this.state.end
                }));

            return childrenWithStartAndEnd;
        }
        if (this.state.selectedText) {
            return (
                <div className='create-flex'>
                  <Link
                    to={`/tracks/${this.props.params.trackId}/new-annotation/`}
                    className='create-button'>Create Annotation</Link>
                </div>
            );
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
