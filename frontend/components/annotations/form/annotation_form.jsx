import React from 'react';
import ClickOutHandler from 'react-onclickout';
import MyEditor from './my_editor.jsx';

const SignupDisclaimer = () => (
    <section className="detail-description">
      <h2 className="sign-up-disclaimer">Sign up to annotate!</h2>
    </section>
);

class AnnotationForm extends React.Component {
    constructor(props) {
        super(props);
        this.back = this.back.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleClickOut = this.handleClickOut.bind(this);
    }

    componentDidMount() {
        if (this.editor) {
            this.editor.focus();
        }
    }

    back() {
        this.props.router.push(`/tracks/${this.props.params.trackId}/`);
    }

    handleSubmit(e) {
        e.preventDefault();
        let { start, end, currentUser } = this.props,
            trackId = this.props.params.trackId,
            newAnnotation = {
                userId: currentUser.id,
                body: e.target.innerText,
                start,
                end,
                trackId
            };
        this.props.createAnnotation(newAnnotation);
        this.back();
    }

    handleUpdate(e) {
        e.preventDefault();
        const updatedAnnotation = Object.assign({},
                                                this.props.annotation,
                                                {body: e.target.innerText});
        this.props.updateAnnotation(updatedAnnotation);
        this.back();
    }

    handleClickOut (e) {
        this.back();
    }

    render() {
        const editing = !!this.props.annotation,
              currentUser = this.props.currentUser,
              body = this.props.annotation ? this.props.annotation.body : '',
              onSubmit = editing ? this.handleUpdate : this.handleSubmit,
              text = editing ? 'Edit this translation!' : 'Start translating!';
        if (!currentUser) { return (<SignupDisclaimer/>); }

        return (
            <ClickOutHandler onClickOut={this.handleClickOut}>
              <section className="detail-description annotation-form">
                <h2>{text}</h2>
                <form className='annotation-form' onSubmit={onSubmit}>
                  <MyEditor
                     className='editor'
                     body={body}
                     ref={(editor => {
                         this.editor = editor;
                        }).bind(this)
                    }/>
                    <input className='annotation-submit' type="submit" value="Submit" />
                </form>
              </section>
            </ClickOutHandler>
        );
    }
};

export default AnnotationForm;
