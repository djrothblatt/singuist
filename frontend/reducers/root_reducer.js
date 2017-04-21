import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TracksReducer from './tracks_reducer';

const rootReducer = combineReducers({
    session: SessionReducer,
    tracks: TracksReducer
});

export default rootReducer;
