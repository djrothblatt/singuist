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
	      <Link to="/"><p className="logo">SINGUIST</p></Link>
	      {userContent}
	    </nav>
	);
    }
};

export default Nav;
