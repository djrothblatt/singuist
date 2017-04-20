import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import AuthForm from './auth_form';

class SignupForm extends React.Component {
    render() {
	return(
	    <AuthForm
	       processForm={this.props.signup}
	       session={this.props.session}
	       actionText="Sign Up" />
	);
    }
}
    
const mapStateToProps = state => ({
    session: state.session
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    signup: user => dispatch(signup(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);
