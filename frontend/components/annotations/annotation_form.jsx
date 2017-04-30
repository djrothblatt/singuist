import React from 'react';
import { Editor, EditorState, ContentState } from 'draft-js';

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

const AnnotationForm = ({onSubmit, body}) => {
    return (
	<form className='annotation-form' onSubmit={onSubmit}>
	  <MyEditor className='editor' body={body} />
	  <input className='annotation-submit' type="submit" value="Submit" />
	</form>
    );
};

export default AnnotationForm;
