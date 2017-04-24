import * as AnnotationsApiUtil from '../util/annotations_api_util';

export const RECEIVE_ANNOTATIONS = 'RECEIVE_ANNOTATIONS';
export const RECEIVE_ANNOTATION = 'RECEIVE_ANNOTATION';
// export const TOGGLE_SELECTED = 'TOGGLE_SELECTED';
// export const TOGGLE_EDITING = 'TOGGLE_EDITING';

export const receiveAnnotations = annotations => ({
    type: RECEIVE_ANNOTATIONS,
    annotations
});

export const receiveAnnotation = annotation => ({
    type: RECEIVE_ANNOTATION,
    annotation
});

// export const ;

export const fetchAnnotations = () => dispatch => {
    return AnnotationsApiUtil.fetchAnnotations()
	.then(annotations => dispatch(receiveAnnotations(annotations)));
};

const thunkAction = promise => arg => dispatch => {
    return promise(arg)
	.then(annotation => dispatch(receiveAnnotation(annotation)));
};

export const fetchAnnotation = thunkAction(AnnotationsApiUtil.fetchAnnotation);
export const createAnnotation = thunkAction(AnnotationsApiUtil.createNewAnnotation);
export const updateAnnotation = thunkAction(AnnotationsApiUtil.updateAnnotation);

export const destroyAnnotation = id => dispatch => {
    return AnnotationsApiUtil.destroyAnnotation(id)
	.then(() => dispatch(receiveAnnotation(null)));
};
