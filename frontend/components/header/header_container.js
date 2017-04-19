import { connect } from 'redux';
import { signup, login, logout } from '../../util/session_api_util';
import Header from './header';

const mapStateToProps = state => ({
    currentUser: state.currentUser 
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
