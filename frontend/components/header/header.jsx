import React from 'react';
import Modal from 'react-modal';
import AuthForm from '../auth/auth_form';
import SignupForm from '../auth/signup_form';
import LoginForm from '../auth/login_form';
import { signup, login } from '../../actions/session_actions';

class Header extends React.Component {
    componentWillMount() {
	Modal.setAppElement('body');
    }
        
    render() {
	return (
	    <header className="header-bar">
	      <p className="logo">SINGUIST</p>
	      <SignupForm />
	      <LoginForm />
	    </header>
	);
    }
};

export default Header;
