import React from 'react';
import { Editor, EditorState, ContentState, convertFromHTML } from 'draft-js';

class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        let blockArray = convertFromHTML(this.props.body);
        const body = this.props.body ? EditorState.createWithContent(ContentState.createFromBlockArray(blockArray)) : EditorState.createEmpty();
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

export default MyEditor;
