import React from 'react';
import ClickOutHandler from 'react-onclickout';
import { connect } from 'react-redux';
import { Editor, EditorState, ContentState } from 'draft-js';
import { createAnnotation, updateAnnotation } from '../../actions/annotations_actions';

class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        const body = this.props.body ? EditorState.createWithContent(ContentState.createFromText(this.props.body)) : EditorState.createEmpty();
        this.state = { body };
        this.handleChange = this.handleChange.bind(this);
        this.focus = this.focus.bind(this);
    }

    handleChange(body) {
        this.setState({body});
    }

    focus() {
        this.editor.focus();
    }

    render() {
        return (
            <Editor editorState={this.state.body} onChange={this.handleChange} ref={editor => { this.editor = editor; }}/>
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
        const {body, editing, currentUser} = this.props;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.editor = (
            <MyEditor
               className='editor'
               body={body}
               ref={(editor => {
                   this.editor = editor;
                  }).bind(this)
              } />);

    }

    componentDidMount() {
        if (this.editor) {
            this.editor.focus();
        }
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

    // focus() {
    //     this.editor.focus();
    // }

    render() {
        const {body, editing, currentUser} = this.props;
        const onSubmit = editing ? this.handleUpdate : this.handleSubmit;
        const text = editing ? 'Edit this translation!' : 'Start translating!';
        if (!currentUser) { return (<SignupDisclaimer/>); }

        return (
            <section className="detail-description annotation-form">
              <h2>{text}</h2>
              <form className='annotation-form' onSubmit={onSubmit}>
                {this.editor}
                <input className='annotation-submit' type="submit" value="Submit" />
              </form>
            </section>
        );
    }
};
                // <MyEditor
                //    className='editor'
                //    body={body}
                //    ref={(editor => {
                //        this.editor = editor;
                //        this.focus();
                //       }).bind(this)
                //   } />

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
