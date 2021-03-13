import * as APIUtil from '../../utils/session.util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = (user) => {
    console.log("receive user", user)
    // debugger;
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

export const signup = user => dispatch => (
    APIUtil.signup(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const login = user => (
    APIUtil.login(user).then((data, status, xhr) => {
        const accessToken = xhr.getResponseHeader("access-token");
        const client = xhr.getResponseHeader("client");
        const uid = xhr.getResponseHeader("uid");
        const expiry = xhr.getResponseHeader("expiry");
        
        const session ={client, uid, expiry, accessToken}
        user = {...data.data,...session}
        debugger
        console.log("login user", user)
        return user
    }, err => err.responseJSON
    )
);

export const logout = () =>{ 
    return (dispatch) => {
    return APIUtil.logout().then(() => dispatch(logoutCurrentUser()));
}}; 