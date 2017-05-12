import React from 'react';
import { connect } from 'react-redux';
import { Editor, EditorState, ContentState } from 'draft-js';
import { createAnnotation, updateAnnotation } from '../../actions/annotations_actions';

class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        const body = this.props.body ? EditorState.createWithContent(ContentState.createFromText(this.props.body)) : EditorState.createEmpty();
        this.state = { body };
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

const SignupDisclaimer = () => (
    <section className="detail-description">
      <h2 className="sign-up-disclaimer">Sign up to annotate!</h2>
    </section>
);

class AnnotationForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let { start, end, currentUser, trackId } = this.props;
        const newAnnotation = {
            body: e.target.innerText,
            start,
            end,
            userId: currentUser.id,
            trackId
        };
        this.props.createAnnotation(newAnnotation);
    }

    handleUpdate(e) {
        e.preventDefault();
        const updatedAnnotation = this.props.annotation;
        updatedAnnotation.body = e.target.innerText;
        this.props.updateAnnotation(updatedAnnotation);
    }

    render() {
        const {body, editing, currentUser} = this.props;
        const onSubmit = editing ? this.handleUpdate : this.handleSubmit;
        const text = editing ? 'Edit this translation!' : 'Start translating!';
        if (!currentUser) { return (<SignupDisclaimer/>); }

        return (
            <section className="detail-description annotation-form">
              <h2>{text}</h2>
              <form className='annotation-form' onSubmit={onSubmit}>
                <MyEditor className='editor' body={body} />
                <input className='annotation-submit' type="submit" value="Submit" />
              </form>
            </section>
        );
    }
};

const mapStateToProps = ({session, annotation}) => {
    return {
        currentUser: session.currentUser,
        annotation
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createAnnotation: annotation => dispatch(createAnnotation(annotation)),
        updateAnnotation: annotation => dispatch(updateAnnotation(annotation))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnnotationForm);
