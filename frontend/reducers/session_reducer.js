import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from '..actions/session_actions';

const SessionReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
    case RECEIVE_CURRENT_USER:
	return {
	    action.currentUser
	}
    // case RECEIVE_ERRORS:
    // 	return {
    //    
    // 	}
    default:
	return state;
    }
};

export default SessionReducer;
