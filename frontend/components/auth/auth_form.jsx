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
	const maybeEmail = this.props.actionText === 'Sign Up' ? (
	    <label>email:
	      <input
		 type="text"
		 onChange={ this.handleChange('email') }
		 value={ this.state.email }/>
	    </label>
	) : (<div />);

	const maybeErrors = (this.props.session.errors.length !== 0) ? (
	    this.props.session.errors.map(err => <li className="error">{err}</li>)
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
		  <ul className="errors-list">
		    {maybeErrors}
		  </ul>

		  {maybeEmail}

		  <label>Username:
		    <input
		       type="text"
		       onChange={ this.handleChange('username') }
		       value={ this.state.username } />
		  </label>

		  <label>Password:
		    <input
		       type="password"
		       onChange={ this.handleChange('password') }
		       value={ this.state.password }/>
		  </label>

		  <button>{this.props.actionText}!</button>
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
