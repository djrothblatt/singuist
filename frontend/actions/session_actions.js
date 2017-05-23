import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const thunkAction = promise => user => dispatch => {
    return promise(user)
        .then(user => dispatch(receiveCurrentUser(user)),
              errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const login = thunkAction(APIUtil.login);
export const signup = thunkAction(APIUtil.signup);
export const logout = () => dispatch => {
    return APIUtil.logout()
        .then(() => dispatch(receiveCurrentUser(null)),
              error => dispatch(receiveErrors(error.responseJSON)));
};

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const receiveErrors = errors => {
    return {
        type: RECEIVE_ERRORS,
        errors // errors: (array-of error)
    };
};

export const clearErrors = () => ({
    type: CLEAR_ERRORS,
    errors: []
});
