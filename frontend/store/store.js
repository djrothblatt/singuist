import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

let middlewares = [thunk];
if (process.env.NODE_ENV !== 'development') {
    middlewares = [...middlewares, logger];
}

const configureStore = (preloadedState = {}) => (
    createStore(
	rootReducer,
	preloadedState,
	applyMiddleware(...middlewares)
    )
);

export default configureStore;
