import { connect } from 'react-redux';
import TrackDetail from './track_detail';
import { fetchTrack } from '../../../actions/tracks_actions';
import { fetchAnnotation, fetchAnnotations } from '../../../actions/annotations_actions';

const mapStateToProps = ({ trackDetail, annotation, annotations }, ownProps) => {
    return {
	trackDetail,
	annotation,
	annotations: Object.keys(annotations).map(id => annotations[id])
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
	fetchTrack: trackId => dispatch(fetchTrack(trackId)),
	fetchAnnotations: trackId => dispatch(fetchAnnotations(trackId)),
	fetchAnnotation: annotationId => dispatch(fetchAnnotation(annotationId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackDetail);
