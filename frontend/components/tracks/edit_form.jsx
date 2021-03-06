import React from 'react';
import { connect } from 'react-redux';
import SongForm from './song_form';
import { updateTrack } from '../../actions/tracks_actions';

class EditTrackForm extends React.Component {
    render() {
	return (
	    <SongForm
	       processTrack={this.props.updateTrack}/>
	);
    }
}

const mapStateToProps = ({trackDetail}) => ({
    trackDetail
});

const mapDispatchToProps = dispatch => ({
    updateTrack: track => dispatch(updateTrack(track))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditTrackForm);
