import SignupModal from './signup_modal';
import LoginModal from './login_modal';

const MODAL_COMPONENTS = {
    'SIGNUP': SignupModal,
    'LOGIN': LoginModal
};

const ModalRoot = ({ modalType, modalProps }) => {
    if (!modalType) {
	return <div />
    } else {
	const OurModal = MODAL_COMPONENTS[modalType];
    }
};
