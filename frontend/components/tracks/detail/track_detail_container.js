import { connect } from 'react-redux';
import TrackDetail from './track_detail';
import { fetchTrack } from '../../../actions/tracks_actions';
import { fetchAnnotations } from '../../../util/annotations_api_util';

const mapStateToProps = ({ tracks, annotations }, ownProps) => ({
    track: tracks[ownProps.params.trackId],
    annotations: Object.keys(annotations).map(id => annotations[id])
});

const mapDispatchToProps = dispatch => ({
    fetchTrack: id => dispatch(fetchTrack(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackDetail);
