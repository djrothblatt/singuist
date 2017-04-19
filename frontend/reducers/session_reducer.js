import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from '../actions/session_actions';

const SessionReducer = (state = {currentUser: null, errors: []}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
    case RECEIVE_CURRENT_USER:
	newState.currentUser = action.currentUser;
	return newState
    case RECEIVE_ERRORS:
	newState.errors = action.errors;
    	return newState
    default:
	return newState;
    }
};

export default SessionReducer;
