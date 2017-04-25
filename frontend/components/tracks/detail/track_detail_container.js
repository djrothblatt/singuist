import { connect } from 'react-redux';
import TrackDetail from './track_detail';
import { fetchTrack } from '../../../actions/tracks_actions';
import { fetchAnnotations } from '../../../actions/annotations_actions';

const mapStateToProps = ({ trackDetail, annotations }, ownProps) => {
    return {
	trackDetail,
	annotations: Object.keys(annotations).map(id => annotations[id])
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
	fetchTrack: trackId => dispatch(fetchTrack(trackId)),
	fetchAnnotations: trackId => dispatch(fetchAnnotations(trackId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackDetail);
