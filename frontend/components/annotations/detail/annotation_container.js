import { connect } from 'react-redux';
import Annotation from './annotation';
import { fetchAnnotation, clearAnnotation, createAnnotation, updateAnnotation } from '../../../actions/annotations_actions';

const mapStateToProps = ({annotation, session, trackDetail}) => {
    return {
        annotation,
        trackId: trackDetail.id,
        currentUser: session.currentUser
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchAnnotation: id => dispatch(fetchAnnotation(id)),
        clearAnnotation: () => dispatch(clearAnnotation()),
        createAnnotation: annotation => dispatch(createAnnotation(annotation)),
        updateAnnotation: annotation => dispatch(updateAnnotation(annotation))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Annotation);
