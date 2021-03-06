import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import TracksReducer from './tracks_reducer';
import TrackDetailReducer from './track_detail_reducer';
import AnnotationsReducer from './annotations_reducer';
import AnnotationReducer from './annotation_reducer';

const rootReducer = combineReducers({
    session: SessionReducer,
    tracks: TracksReducer,
    trackDetail:  TrackDetailReducer,
    annotations: AnnotationsReducer,
    annotation: AnnotationReducer
});

export default rootReducer;
