import { RECEIVE_ANNOTATION, RECEIVE_ANNOTATIONS } from '../actions/annotations_actions';

const _defaultState = {};

const AnnotationsReducer = (state = _defaultState, action) => {
    Object.freeze(state);
    switch(action.type) {
    case RECEIVE_ANNOTATIONS:
	return action.annotations;
    default:
	return state;
    }
};

export default AnnotationsReducer;
