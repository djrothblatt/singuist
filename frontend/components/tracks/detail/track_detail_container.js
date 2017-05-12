import { connect } from 'react-redux';
import TrackDetail from './track_detail';
import { fetchTrack, clearTrack, updateTrack } from '../../../actions/tracks_actions';
import { fetchAnnotation, fetchAnnotations, clearAnnotation, createAnnotation, updateAnnotation } from '../../../actions/annotations_actions';

const mapStateToProps = ({ trackDetail, annotation, annotations, session }, ownProps) => {
    return {
        session,
        trackDetail,
        annotation,
        annotations: Object.keys(annotations).map(id => annotations[id])
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchTrack: trackId => dispatch(fetchTrack(trackId)),
        clearTrack: () => dispatch(clearTrack()),
        updateTrack: track => dispatch(updateTrack(track)),
        fetchAnnotations: trackId => dispatch(fetchAnnotations(trackId)),
        fetchAnnotation: annotationId => dispatch(fetchAnnotation(annotationId)),
        clearAnnotation: () => dispatch(clearAnnotation())
        // createAnnotation: annotation => dispatch(createAnnotation(annotation)),
        // updateAnnotation: annotation => dispatch(updateAnnotation(annotation))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackDetail);
