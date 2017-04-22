import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import AuthForm from './auth_form';

class LoginForm extends React.Component {
    render() {
	return(
	    <AuthForm
	       processForm={this.props.login}
	       actionText="Log In" />
	);
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    login: data => dispatch(login(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);
