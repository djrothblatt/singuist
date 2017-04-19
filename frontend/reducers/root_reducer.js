import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ModalReducer from './modal_reducer';

const rootReducer = combineReducers({
    currentUser: SessionReducer,
    modal: ModalReducer
});

export default rootReducer
