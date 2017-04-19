import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
//import { showModal } from '../actions.';

class AuthForm extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    username: '',
	    password: ''
	};
	if (this.props.actionText === 'Sign Up') { this.state.email = '' };
	this.handleUsernameChange = this.handleUsernameChange.bind(this);
	this.handlePasswordChange = this.handlePasswordChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleUsernameChange(e) {
	this.setState({ username: e.currentTarget.value });
    }

    handlePasswordChange(e) {
	this.setState({ password: e.currentTarget.value });
    }

    handleEmailChange(e) {
	this.setState({ email: e.currentTarget.value });
    }
    
    handleSubmit(e) {
	e.preventDefault();
	this.props.processForm(this.state)
	    .then(() => this.props.router.push('/'));
    }

    render() {
	const maybeEmail = this.props.actionText === 'Sign Up' ? (
	    <label>email:
	      <input
		 type="text"
		 onChange={ this.handleEmailChange }
		 value={ this.state.email }/>
	    </label>
	) : (<div />);
	return (
	    <section>
	      <form onSubmit={this.handleSubmit}>
		{maybeEmail}
		<label>Username: 
		  <input
		     type="text"
		     onChange={ this.handleUsernameChange }
		     value={ this.state.username } />
		</label>
		
		<label>Password:
		  <input
		     type="password"
		     onChange={ this.handlePasswordChange }
		     value={ this.state.password }/>
		</label>
		<button>{this.props.actionText}!</button>
	      </form>	
	    </section>
	);
    }
}

export default AuthForm;
