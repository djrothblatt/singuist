import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';

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
	this.handleSubmit = this.handleSubmit.bind(this);

	this.openModal = this.openModal.bind(this);
	this.closeModal = this.closeModal.bind(this);

	this.loginGuest = this.loginGuest.bind(this);
    }

    componentWillMount() {
	Modal.setAppElement('body');
    }

    openModal() {
	const newState = Object.assign(this.state, { modal: { open: true } });
	this.setState(newState);
    }

    closeModal() {
	this.props.clearErrors();
	const newState = Object.assign(this.state, { modal: { open: false } });
	this.setState(newState);
    }

    handleChange(field) {
	const newState = Object.assign({}, this.state);
	return e => {
	    newState.user[field] = e.target.value;
	    this.setState(newState);
	};
    }

    handleSubmit(e) {
	e.preventDefault();
	this.props.processForm(this.state.user);
    }

    loginGuest() {
	const guestUser = { username: 'guest', password: 'password' };
	this.props.processForm(guestUser);
    }

    render() {
	const customStyle = {
	    overlay: {
		position: 'fixed',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	    },
	    content: {
		position                    : 'fixed',
		left                        : '700px',
		height                      : '250px',
		width                       : '350px',
		border                      : '1px solid #ccc',
		background                  : '#ccd',
		outline                     : 'none',
		padding                     : '20px'
	    }
	};

	const maybeEmail = this.props.actionText === 'Sign Up' ? (
	      <input
		 type="text"
		 placeholder="email"
		 className="auth-input"
		 onChange={ this.handleChange('email') }
		 value={ this.state.email }/>
	) : (<div />);

	const maybeErrors = (this.props.session.errors.length !== 0) ? (
	    this.props.session.errors.map(err => <li className="error">{err}</li>)
	) : (<div />);

	const maybeGuest = this.props.actionText === 'Log In' ? (
	    <button className="auth-submit" onClick={this.loginGuest}>Log In As Guest</button>
	) : (<div />);

	return (
	    <div>
	      <button onClick={this.openModal}>{this.props.actionText}</button>

	      <Modal
		 isOpen={this.state.modal.open}
		 onRequestClose={this.closeModal}
		 contentLabel={`Auth Modal ${this.props.actionText}`}
		 style={customStyle}>
		<h1 className="auth-header">{this.props.actionText}</h1>
		<form className="auth-form" onSubmit={this.handleSubmit}>
		  <ul className="errors-list">
		    {maybeErrors}
		  </ul>

		  {maybeEmail}

		    <input
		       type="text"
		       placeholder="username"
		       className="auth-input"
		       onChange={ this.handleChange('username') }
		       value={ this.state.username } />

		    <input
		       type="password"
		       placeholder="password"
		       className="auth-input"
		       onChange={ this.handleChange('password') }
		       value={ this.state.password }/>

		  <button className="auth-submit">{this.props.actionText}</button>
		</form>
		{maybeGuest}
	      </Modal>
	    </div>
	);
    }
}

const mapStateToProps = ({session}) => ({session});
const mapDispatchToProps = dispatch => ({
    clearErrors: () => dispatch(clearErrors())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthForm);
