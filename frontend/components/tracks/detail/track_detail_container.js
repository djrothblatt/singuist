import { connect } from 'react-redux';
import TrackDetail from './track_detail';
import { fetchTrack } from '../../../actions/tracks_actions';

const mapStateToProps = ({ tracks }) => {
    return {
    	track: tracks
    };
};

const mapDispatchToProps = dispatch => {
    return {
	fetchTrack: id => dispatch(fetchTrack(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackDetail);
