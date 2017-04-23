import React from 'react';
import { Link } from 'react-router';
import SignupForm from '../auth/signup_form';
import LoginForm from '../auth/login_form';

class Nav extends React.Component {    
    constructor(props) {
	super(props);
	this.handleLogout = this.handleLogout.bind(this);
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
		  <p>Welcome, {currentUser.username}!</p>
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
	      <h1 className="search">Search</h1>
	      <Link to="/"><h1 className="logo">SINGUIST</h1></Link>
	      {userContent}
	    </nav>
	);
    }
};

export default Nav;
