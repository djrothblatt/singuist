import { RECEIVE_TRACKS, RECEIVE_TRACK } from '../actions/tracks_actions';

const TracksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
    case RECEIVE_TRACKS:
	return action.tracks;
    default:
	return state;
    }
};

export default TracksReducer;
