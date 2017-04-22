import { connect } from 'react-redux';
import TracksIndex from './tracks_index';
import { fetchTracks } from '../../../actions/tracks_actions';

const mapStateToProps = ({tracks}) => ({tracks});

const mapDispatchToProps = dispatch => ({
    fetchTracks: () => dispatch(fetchTracks())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TracksIndex);
