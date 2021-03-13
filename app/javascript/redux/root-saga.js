import {all, call} from 'redux-saga/effects'

import { userSagas } from './user/user.sagas';


export default function* rootSaga(){
    // all runs all the code concurrently side by side
    yield all([
        // call(shopSagas),
        call(userSagas),
        // call(cartSagas)
    ])
}