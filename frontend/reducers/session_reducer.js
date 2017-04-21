import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const _nullUser = {
    currentUser: null,
    errors: []
};

const SessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch (action.type) {
    case RECEIVE_CURRENT_USER:
	const currentUser = action.currentUser;
	return Object.assign({}, _nullUser, {currentUser});
    case RECEIVE_ERRORS:
	const errors = action.errors;
	debugger
    	return Object.assign({}, _nullUser, {errors});
    case CLEAR_ERRORS:
	return _nullUser;
    default:
	return state;
    }
};

export default SessionReducer;
