import React from 'react';
import ClickOutHandler from 'react-onclickout';
import AnnotationContainer from '../../annotations/detail/annotation_container';
import AnnotationFormContainer from '../../annotations/annotation_form';

const _defaultTrackState = {
    selection: null,
    selectedText: null,
    start: null,
    end: null,
    annotationOpen: false,
    editingAnnotation: false,
    creatingAnnotation: false
};

class TrackDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = _defaultTrackState;
        this.renderHeader = this.renderHeader.bind(this);
        this.renderLyrics = this.renderLyrics.bind(this);
        this.renderDescription = this.renderDescription.bind(this);

        this.handleSelection = this.handleSelection.bind(this);
        this.handleAnnotationClick = this.handleAnnotationClick.bind(this);
        this.handleClickOut = this.handleClickOut.bind(this);

        this.stringToSpans = this.stringToSpans.bind(this);

        this.openAnnotation = this.openAnnotation.bind(this);
        this.openEditing = this.openEditing.bind(this);
        this.openCreating = this.openCreating.bind(this);
    }

    componentDidMount() {
        this.props.clearTrack();
        this.props.clearAnnotation();

        const trackId = this.props.params.trackId;
        this.props.fetchAnnotations(trackId);
        this.props.fetchTrack(trackId);
    }

    openAnnotation() {
        this.setState(Object.assign({}, this.state, { annotationOpen: true }));
    }

    openEditing() {
        this.setState(Object.assign({}, this.state, { editingAnnotation: true }));
    }

    openCreating() {
        this.setState(Object.assign({}, this.state, { creatingAnnotation: true }));
    }

    handleSelection() {
        const selection = window.getSelection();
        const text = selection.toString().trim();

        if (text.length > 0) {
            const lyrics = this.props.trackDetail.lyrics;
            const index = lyrics.indexOf(text);
            const end = text.length + index;

            const newState = Object.assign({}, this.state, {
                start: index,
                annotationOpen: false,
                editingAnnotation: false,
                creatingAnnotation: false,
                selectedText: text,
                selection,
                end
            });
            this.setState(newState);
            this.props.clearAnnotation();
        } else {
            const newState = Object.assign({}, this.state, {
                selectedText: null,
                annotationOpen: false,
                editingAnnotation: false,
                creatingAnnotation: false
            });
            this.setState(newState);
        }
    }

    handleAnnotationClick(e, annoId) {
        this.openAnnotation();
        this.props.fetchAnnotation(annoId);
    }

    handleClickOut(e) {
        this.setState(Object.assign({}, this.state, {
            annotationOpen: false,
            editingAnnotation: false,
            creatingAnnotation: false
        }));
    };

    stringToSpans(string) {
        const annotationStarts = {},
              annotationEnds = {},
              length = string.length;
        this.props.annotations.forEach(anno => {
            annotationStarts[anno.start] = anno.id;
            annotationEnds[anno.end] = anno.id;
        });

        let inAnnotation = false,
            spans = [],
            body = '',
            start = 0,
            position;
        function changeStates(span) {
            spans.push(span);
            start = position;
            inAnnotation = !inAnnotation;
            body = '';
        }
        for (position = 0; position < length; position++) {
            if (inAnnotation) {
                const annoId = annotationEnds[position];

                if (annoId) {
                    const onClick = annoId ? (e => { this.handleAnnotationClick(e, annoId); }).bind(this) : (e => {});
                    const span = (
                        <span
                           key={position}
                           className="annotation"
                           onClick={onClick}
                           dangerouslySetInnerHTML={ { __html: body } }/>
                    );
                    changeStates(span);
                }
            } else if (annotationStarts[position]) {
                const span = (
                    <span key={position} dangerouslySetInnerHTML={ { __html: body } }/>
                );
                changeStates(span);
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

        if (this.state.selectedText) {
            if (this.state.creatingAnnotation) {
                return (
                    <ClickOutHandler onClickOut={this.handleClickOut}>
                      <AnnotationFormContainer
                         body={undefined}
                         editing={false}
                         trackId={this.props.params.trackId}
                         start={this.state.start}
                         end={this.state.end}
                         ref={(form => { this.form = form; }).bind(this)} />
                    </ClickOutHandler>
                );
            } else {
                return (
                    <div className='create-flex'>
                      <button
                         className='create-button'
                         onClick={this.openCreating}>Create Annotation</button>
                    </div>
                );
            }

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
                    <ClickOutHandler onClickOut={this.handleClickOut}>
                      <div className='detail-description annotation-display'>
                        <AnnotationContainer/>
                        <button
                           className='edit-button'
                           onClick={this.openEditing}>Edit</button>
                      </div>
                    </ClickOutHandler>
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
