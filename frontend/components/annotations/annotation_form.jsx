import React from 'react';
import Quill from 'quill';
import { RECEIVE_ANNOTATION } from '../../actions/annotations_actions';

class AnnotationForm extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    body: ''
	};
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
	    <div id="annotator-container">
	    </div>
	);
    }
}

export default AnnotationForm;
