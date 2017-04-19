import {SHOW_MODAL, HIDE_MODAL} from '../actions/modal_actions';

const initialState = {
    modalType: null,
    modalProps: {}
};

const ModalReducer = (state = initialState, action) {
    switch (action.type) {
    case SHOW_MODAL:
	return {
	    modalType: action.modalType,
	    modalProps: action.modalProps
	};
    case HIDE_MODAL:
	return initialState;
    default:
	return state;
    }  
};
