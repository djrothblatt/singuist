import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class SongForm extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    artist: '',
	    name: '',
	    language: '',
	    lyrics: '',
	    description: ''
	};

	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
	const newState = Object.assign({}, this.state); 
	return e => {
	    newState[field] = e.target.value;
	    this.setState(newState);
	};
    }

    handleSubmit(e) {
	e.preventDefault();
	this.props.processTrack(this.state);
	this.props.router.push('/');
    }
    
    renderHeader() {
	return (
	    <section className="song-form-header">
	      <h1>Add Song</h1>
	      <h2>Song Details</h2>
	      <h3>* required</h3>
	    </section>
	);
    }
    
    render() {
	return (
	    <section className="song-form">
	      {this.renderHeader()}
	      <form onSubmit={this.handleSubmit}>
		<label>Title *
		  <input
		     type="text"
		     value={this.state.name}
		     onChange={this.handleChange('name')} />
		</label>
		<label>By *
		  <input
		     type="text"
		     value={this.state.artist}
		     onChange={this.handleChange('artist')} />
		</label>
		<label>Language *
		  <input
		     type="text"
		     value={this.state.language}
		     onChange={this.handleChange('language')} />
		</label>
		<label>Lyrics *
		  <textarea
		     value={this.state.lyrics}
		     onChange={this.handleChange('lyrics')} />
		</label>
		<label>About
		  <textarea
		     value={this.state.description}
		     onChange={this.handleChange('description')} />
		</label>

		<input
		   type="submit"
		   value="Submit" />
	      </form>
	    </section>
	    
	);
    }
}

export default withRouter(SongForm);
