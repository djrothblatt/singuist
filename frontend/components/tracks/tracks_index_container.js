import { connect } from 'react-redux';
import TracksIndex from './tracks_index';
import { fetchTracks } from '../actions/tracks_actions';

const mapStateToProps = state => {
    return {
	tracks: state.tracks
    };
};

const mapDispatchToProps = dispatch => {
    return {
	fetchTracks: () => dispatch(fetchTracks())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TracksIndex);
