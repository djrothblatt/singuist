import React from 'react';
// import Quill from 'quill';
import ReactQuill from 'react-quill';
import { RECEIVE_ANNOTATION } from '../../actions/annotations_actions';

class AnnotationForm extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    body: ''
	};
	this.handleBodyChange = this.handleBodyChange.bind(this);
    }

    componentDidMount() {
	// this.quill = new Quill('#annotator-container', {
	//     modules: {},
	//     placeholder: 'Translate this song!',
	//     theme: 'snow'
	// });
    }

    handleBodyChange(e) {
	this.setState({body: e.target.value});
    }

    render() {
	return (
	    <form onSubmit={this.handleSubmit}>
	      <ReactQuill
		 type="textarea"
		 value={this.state.body}
		 onChange={this.handleBodyChange}
		 placeholder={this.props.placeholder}
		 theme="bubble"/>
	    </form>

	);
    }
}
	    //   <form onSubmit={this.handleSubmit}>
	    // 	<input
	    // 	   type="text"
	    // 	   value={this.state.body}
	    // 	   onChange={this.handleBodyChange}/>
	    //   </form>
	    // </ReactQuill>

export default AnnotationForm;
