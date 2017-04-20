import { connect } from 'react-redux';
import { signup, login } from '../../util/session_api_util';
import Nav from './nav';

const mapStateToProps = state => ({
    currentUser: state.currentUser 
});

const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);