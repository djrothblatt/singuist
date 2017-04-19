import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import AuthForm from './auth_form';

const SignupForm = () => (
    <AuthForm
       processForm={signup}
       actionText="Sign Up" />
);
    
const mapStateToProps = state => ({
    session: state.session
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(signup(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);
