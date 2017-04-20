import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import AuthForm from './auth_form';

class LoginForm extends React.Component {
    render() {
	return(
	    <AuthForm
	       processForm={this.props.login}
	       session={this.props.session}
	       actionText="Log In" />	    
	);
    }
}
    
const mapStateToProps = state => ({
    session: state.session
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);
