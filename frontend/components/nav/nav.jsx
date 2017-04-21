import React from 'react';
import Modal from 'react-modal';
import AuthForm from '../auth/auth_form';
import SignupForm from '../auth/signup_form';
import LoginForm from '../auth/login_form';

class Nav extends React.Component {    
    constructor(props) {
	super(props);
	this.handleLogout = this.handleLogout.bind(this);
    }
    
    componentWillMount() {
	Modal.setAppElement('body');
    }

    handleLogout() {
	this.props.logout();
    }

    render() {
	let userContent;
	const currentUser = this.props.currentUser;
	if (currentUser) {
	    userContent = (
		<section className="auth">
		  <p className="auth">NAME: {currentUser.username}</p>
		  <button onClick={this.handleLogout}>logout</button>
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
	      <button className="add-song">Add song</button>
	      <p className="logo">SINGUIST</p>
	      {userContent}
	    </nav>
	);
    }
};

export default Nav;
