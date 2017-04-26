import { RECEIVE_ANNOTATION } from '../actions/annotations_actions';

const _defaultState = {};

const AnnotationReducer = (state = _defaultState, action) => {
    switch (action.type) {
    case RECEIVE_ANNOTATION:
	return action.annotation;
    default:
	return state;
    }
}

export default AnnotationReducer;
