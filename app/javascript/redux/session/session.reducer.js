import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from './session.actions';

const _nullUser = Object.freeze({
    currentUser: null
});

const sessionReducer = (state = _nullUser, action) =>{
    Object.freeze(state);
    console.log("reducer", action)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { currentUser: action.user.sessionData};
            // return Object.assign({}, state, { [action.user.id]: action.user });
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return state;
    }
};

export default sessionReducer;