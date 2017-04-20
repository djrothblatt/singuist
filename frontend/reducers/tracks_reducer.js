import { RECEIVE_TRACKS, RECEIVE_TRACK };

const TracksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
    case RECEIVE_TRACKS:
	return action.tracks;
    case RECEIVE_TRACK:
	return {
	    [action.track.id]: action.track
	};
    default:
	return state;
    }
};

export default TracksReducer;
