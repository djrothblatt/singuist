import React from 'react';
import { connect } from 'react-redux';
import AnnotationForm from './annotation_form';
import { createAnnotation, updateAnnotation, clearAnnotation } from '../../../actions/annotations_actions';

const mapStateToProps = ({session, annotation}) => {
    return {
        currentUser: session.currentUser,
        annotation
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createAnnotation: annotation => dispatch(createAnnotation(annotation)),
        updateAnnotation: annotation => dispatch(updateAnnotation(annotation)),
        clearAnnotation: annotation => dispatch(clearAnnotation())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnnotationForm);
