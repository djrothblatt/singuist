import React from 'react';
// import ModalRootContainer from '../modal_root_container';
import Modal from 'react-modal';
import AuthForm from '../auth_form';
import { signup, login } from '../../actions/session_actions';

class Header extends React.Component {

    constructor(props) {
	super(props);
	this.state = {
	    signupOpen: false,
	    loginOpen: false
	};
	this.openLogin = this.openLogin.bind(this);
	this.closeLogin = this.closeLogin.bind(this);
	
	this.openSignup = this.openSignup.bind(this);
	this.closeSignup = this.closeSignup.bind(this);
    }

    componentWillMount() {
	Modal.setAppElement('body');
    }
    
    openLogin() {
	this.setState({ loginOpen: true });
    }

    closeLogin() {
	this.setState({ loginOpen: false });
    }

    openSignup() {
	this.setState({ signupOpen: true });
    }

    closeSignup() {
	this.setState({ signupOpen: false });
    }
    
    render() {
	return (
	    <header className="header-bar">
	      <p className="logo">SINGUIST</p>
	      <button onClick={this.openSignup}>Sign Up</button>
	      <Modal
		 isOpen={this.state.signupOpen}
		 onRequestClose={this.closeSignup}
		 contentLabel="Signup Modal">
		<AuthForm processForm={signup} actionText="Sign Up" />
	      </Modal>

	      <button onClick={this.openLogin}>Log In</button>
	      <Modal
		 isOpen={this.state.loginOpen}
		 onRequestClose={this.closeLogin}
		 contentLabel="Login Modal">
		<AuthForm processForm={login} actionText="Log in" />
	      </Modal>
	    </header>
	);
    }
};

export default Header;
