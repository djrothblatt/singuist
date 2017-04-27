import * as AnnotationsApiUtil from '../util/annotations_api_util';

export const RECEIVE_ANNOTATIONS = 'RECEIVE_ANNOTATIONS';
export const RECEIVE_ANNOTATION = 'RECEIVE_ANNOTATION';

export const receiveAnnotations = annotations => ({
    type: RECEIVE_ANNOTATIONS,
    annotations
});

export const receiveAnnotation = annotation => ({
    type: RECEIVE_ANNOTATION,
    annotation
});

export const fetchAnnotations = id => dispatch => {
    return AnnotationsApiUtil.fetchAnnotations(id)
	.then(annotations => dispatch(receiveAnnotations(annotations)));
};

export const fetchAnnotation = id => dispatch => {
    return AnnotationsApiUtil.fetchAnnotation(id)
	.then(annotation => dispatch(receiveAnnotation(annotation)));
};

export const createAnnotation = annotation => dispatch => {
    return AnnotationsApiUtil.createNewAnnotation(annotation)
	.then(annotation => dispatch(fetchAnnotations(annotation.track_id)));
};

export const updateAnnotation = annotation => dispatch => {
    return AnnotationsApiUtil.updateAnnotation(annotation)
	.then(annotation => dispatch(fetchAnnotations(annotation.track_id)));
};

export const destroyAnnotation = id => dispatch => {
    return AnnotationsApiUtil.destroyAnnotation(id)
	.then(() => dispatch(receiveAnnotation(null)));
};

export const clearAnnotation = () => {
    return receiveAnnotation(null);
};
