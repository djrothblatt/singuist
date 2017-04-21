import React from 'react';
import { withRouter } from 'react-router';

class TrackForm extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    artist: '',
	    name: '',
	    language: '',
	    lyrics: '',
	    description: ''
	};
    }

    handleChange(field) {
	const that = this;
	return e => {
	    const newState = Object.assign({}, that.state);
	    newState.user[field] = e.target.value;
	    that.setState(newState);
	};
    }
}

export default TrackForm;
