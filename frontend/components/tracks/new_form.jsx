import React from 'react';
import { connect } from 'react-redux';
import SongForm from './song_form';
import { createTrack } from '../../actions/tracks_actions';

class NewTrackForm extends React.Component {
    render() {
	return (
	    <SongForm
	       processTrack={this.props.createTrack}/>
	);
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    createTrack: track => dispatch(createTrack(track))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewTrackForm);
