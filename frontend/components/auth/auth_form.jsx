import React, { Component } from 'react';
import Modal from 'react-modal';

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

	this.handleUsernameChange = this.handleUsernameChange.bind(this);
	this.handlePasswordChange = this.handlePasswordChange.bind(this);
	this.handleEmailChange = this.handleEmailChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);

	this.openModal = this.openModal.bind(this);
	this.closeModal = this.closeModal.bind(this);
    }

    // componentDidMount() {
    // 	this.props.clearErrors();
    // }

    openModal() {
	this.setState({ modal: { open: true } });
    }

    closeModal() {
	this.setState({ modal: { open: false } });
    }
    
    handleUsernameChange(e) {
	this.setState({ user: { username: e.currentTarget.value } });
    }

    handlePasswordChange(e) {
	this.setState({ user: { password: e.currentTarget.value } });
    }

    handleEmailChange(e) {
	this.setState({ user: { email: e.currentTarget.value } });
    }

    handleSubmit(e) {
	e.preventDefault();
	this.props.processForm(this.state.user);
	this.closeModal();
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

export default AuthForm;
