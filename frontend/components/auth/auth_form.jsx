import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router';

class AuthForm extends React.Component {
    constructor(props) {
	super(props);

	const user = {
	    username: '',
	    password: ''
	};
	if (this.props.actionText === 'Sign Up') {
	    user.email = '';
	}
	
	this.state = {
	    user,
	    modal: {
		open: false
	    }
	};

	this.handleChange = this.handleChange.bind(this);
	this.handleUsernameChange = this.handleUsernameChange.bind(this);
	this.handlePasswordChange = this.handlePasswordChange.bind(this);
	this.handleEmailChange = this.handleEmailChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);

	this.openModal = this.openModal.bind(this);
	this.closeModal = this.closeModal.bind(this);

	this.loginGuest = this.loginGuest.bind(this);
    }

    componentWillMount() {
	Modal.setAppElement('body');
    }

    openModal() {
	const newState = Object.assign(this.state, {modal: { open: true } });
	this.setState(newState);
    }

    closeModal() {
	this.props.clearErrors();
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
	});
    }

    loginGuest() {
	const guestUser = { username: 'guest', password: 'password' };
	this.props.processForm(guestUser).then(() => {
	    this.props.router.replace('/');
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

	const maybeErrors = (this.props.session.errors.length !== 0) ? (
	    this.props.session.errors.map(err => <li>{err}</li>)
	) : (<div />);

	const maybeGuest = this.props.actionText === 'Log In' ? (
	    <button onClick={this.loginGuest}>Log In As Guest</button>
	) : (<div />);

	return (
	    <div>
	      <button onClick={this.openModal}>{this.props.actionText}</button>

	      <Modal
		 isOpen={this.state.modal.open}
		 onRequestClose={this.closeModal}
		 contentLabel={`Auth Modal ${this.props.actionText}`}>
		<form onSubmit={this.handleSubmit}>
		  <ul>
		    {maybeErrors}
		  </ul>

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

	      {maybeGuest}
	    </div>
	);
    }
}

export default withRouter(AuthForm);
