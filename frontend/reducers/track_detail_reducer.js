import { RECEIVE_TRACK } from '../actions/tracks_actions';

const TrackDetailReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
    case RECEIVE_TRACK:
	return action.trackDetail;
    default:
	return state;
    }
};

export default TrackDetailReducer;
