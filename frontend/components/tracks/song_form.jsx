import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createTrack } from '../../actions/tracks_actions';

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
	this.handleArtistChange = this.handleArtistChange.bind(this);
	this.handleNameChange = this.handleNameChange.bind(this);
	this.handleLanguageChange = this.handleLanguageChange.bind(this);
	this.handleLyricsChange = this.handleLyricsChange.bind(this);
	this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
	const newState = Object.assign({}, this.state); 
	return e => {
	    newState[field] = e.target.value;
	    this.setState(newState);
	};
    }

    handleArtistChange(e) {
	this.handleChange('artist')(e);
    }

    handleNameChange(e) {
	this.handleChange('name')(e);
    }

    handleLanguageChange(e) {
	this.handleChange('language')(e);
    }

    handleLyricsChange(e) {
	this.handleChange('lyrics')(e);
    }

    handleDescriptionChange(e) {
	this.handleChange('description')(e);
    }

    handleSubmit(e) {
	e.preventDefault();
	this.props.createTrack(this.state);
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
		  <input type="text" value={this.state.name} onChange={this.handleNameChange} />
		</label>
		<label>By *
		  <input type="text" value={this.state.artist} onChange={this.handleArtistChange} />
		</label>
		<label>Language *
		  <input type="text" value={this.state.language} onChange={this.handleLanguageChange} />
		</label>
		<label>Lyrics *
		  <input type="textarea" value={this.state.lyrics} onChange={this.handleLyricsChange} />
		</label>
		<label>About
		  <input type="textarea" value={this.state.description} onChange={this.handleDescriptionChange} />
		</label>

		<input type="submit" value="Submit" />
	      </form>
	    </section>
	    
	);
    }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    createTrack: track => dispatch(createTrack(track))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SongForm));
