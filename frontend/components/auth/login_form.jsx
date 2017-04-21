import React from 'react';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import AuthForm from './auth_form';

class LoginForm extends React.Component {
    render() {
	return(
	    <AuthForm
	       processForm={this.props.login}
	       session={this.props.session}
	       actionText="Log In"
	       clearErrors={this.props.clearErrors}/>
	);
    }
}

const mapStateToProps = state => ({
    session: state.session
});

const mapDispatchToProps = dispatch => ({
    login: data => dispatch(login(data)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);
