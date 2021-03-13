import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //actual localstorage object

import userReducer from './user/user.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['cart'] //only reducer we want to persist is cart
}
const rootReducer = combineReducers({
    user: userReducer,
    // session: sessionReducer
    // cart: cartReducer,
    // directory: directoryReducer,
    // shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer);