import { connect } from 'react-redux';
import { signup, login } from '../../util/session_api_util';
import Header from './header';

const mapStateToProps = state => ({
    currentUser: state.currentUser 
});

const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
