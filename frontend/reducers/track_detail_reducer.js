import { RECEIVE_TRACK } from '../actions/tracks_actions';

const _defaultState = {
    name: '',
    lyrics: '',
    description: '',
    language: '',
    artist: ''
};

const TrackDetailReducer = (state = _defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
    case RECEIVE_TRACK:
	return action.track;
    default:
	return state;
    }
};

export default TrackDetailReducer;
