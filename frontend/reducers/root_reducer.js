import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';

const rootReducer = combineReducers({
    currentUser: SessionReducer,
});

export default rootReducer
