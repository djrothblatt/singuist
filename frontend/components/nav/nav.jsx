import React from 'react';
import Modal from 'react-modal';
import AuthForm from '../auth/auth_form';
import SignupForm from '../auth/signup_form';
import LoginForm from '../auth/login_form';
import { signup, login, logout } from '../../actions/session_actions';

class Nav extends React.Component {
    componentWillMount() {
	Modal.setAppElement('body');
    }
        
    render() {
	let userContent;
	if (window.currentUser) {
	    userContent = (
		<section className="auth">
		  <p className="auth">{window.currentUser.username}</p>
		  <button onClick={this.props.logout}>logout</button>
		</section>
	    );
	} else {
	    userContent = (
		<section className="auth">
		  <SignupForm />
		  <LoginForm />
		</section>
	    );
	}
	
	return (
	    <nav className="nav-bar">
	      <p className="logo">SINGUIST</p>
	      {userContent}
	    </nav>
	);
    }
};

export default Nav;
