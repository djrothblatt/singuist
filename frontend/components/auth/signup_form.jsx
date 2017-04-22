import React from 'react';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import AuthForm from './auth_form';

class SignupForm extends React.Component {
    render() {
	return(
	    <AuthForm
	       processForm={this.props.signup}
	       actionText="Sign Up" />
	);
    }
}
    
const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
    signup: user => dispatch(signup(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);
