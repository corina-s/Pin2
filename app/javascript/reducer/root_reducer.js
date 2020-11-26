import { combineReducers } from "redux";
// import errors from './errors_reducer';
// import entities from './entities_reducer';
// import session from './session_reducer';
// import ui from './ui_reducer';

const rootReducer = (state, action)=>{
    console.log(action.type);
    switch (action.type) {
        default:
            return state;
    }
}

// combineReducers({
//     // entities,
//     // session,
//     // ui,
//     // errors
// });

export default rootReducer;