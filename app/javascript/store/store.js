import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = [thunk];

if(process.env.NODE_ENV !== 'production'){
    middlewares.push(logger);
}
const preloadedState = {
    things: []
}
const configureStore = (preloadedState)=>(
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(...middlewares)
    )
);

export default configureStore;