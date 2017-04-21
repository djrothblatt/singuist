import { connect } from 'react-redux';
import TrackDetail from './track_detail';

const mapStateToProps = ({ tracks }) => {
    const track = Object.keys(tracks).map(id => tracks[id])[0];
    return {
	track
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
