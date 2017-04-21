import React, { Component } from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router';

class AuthForm extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    user: {
		username: '',
		password: ''
	    },
	    modal: {
		open: false
	    }
	};
	if (this.props.actionText === 'Sign Up') {
	    this.state.user.email = '';
	}

	this.handleChange = this.handleChange.bind(this);
	this.handleUsernameChange = this.handleUsernameChange.bind(this);
	this.handlePasswordChange = this.handlePasswordChange.bind(this);
	this.handleEmailChange = this.handleEmailChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);

	this.openModal = this.openModal.bind(this);
	this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
	const newState = Object.assign(this.state, {modal: { open: true } });
	this.setState(newState);
    }

    closeModal() {
	const newState = Object.assign(this.state, {modal: { open: false } });
	this.setState(newState);
    }

    handleChange(field) {
	const that = this;
	return e => {
	    const newState = Object.assign({}, that.state);
	    newState.user[field] = e.target.value;
	    that.setState(newState);
	};
    }
    
    handleUsernameChange(e) {
	this.handleChange('username')(e);
    }

    handlePasswordChange(e) {
	this.handleChange('password')(e);
    }

    handleEmailChange(e) {
	this.handleChange('email')(e);
    }

    handleSubmit(e) {
	e.preventDefault();
	this.props.processForm(this.state.user).then(() => {
	    this.props.router.replace('/');
	    this.closeModal();
	});
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
	    <div>
	      <button onClick={this.openModal}>{this.props.actionText}</button>

	      <Modal
		 isOpen={this.state.modal.open}
		 onRequestClose={this.closeModal}
		 contentLabel={`Auth Modal ${this.props.actionText}`}>
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
	      </Modal>
	    </div>
	);
    }
}

export default withRouter(AuthForm);
