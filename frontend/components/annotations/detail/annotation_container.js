import { connect } from 'react-redux';
import Annotation from './annotation';
import { fetchAnnotation } from '../../../actions/annotations_actions';

const mapStateToProps = ({annotation}) => {
    return {
	annotation
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
	fetchAnnotation: id => dispatch(fetchAnnotation(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Annotation);
