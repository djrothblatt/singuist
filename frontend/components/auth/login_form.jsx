import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import AuthForm from './auth_form';

const LoginForm = () => (
    <AuthForm
       processForm={login}
       actionText="Log In" />
);
    
const mapStateToProps = state => ({
    session: state.session
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);
