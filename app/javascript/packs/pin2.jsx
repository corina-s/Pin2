import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
// import {login, signup, logout} from './util/session_api_util'
import configureStore from "../redux/store";
import App from '../app';
import './pin2.css'
import { store, persistor } from '../redux/store'
// import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    // let store;
    // if (window.currentUser) {
    //     const preloadedState = { session: { id: window.currentUser.id }, entities: {users: {[window.currentUser.id]: window.currentUser}} };
    //     store = configureStore(preloadedState);
    //     delete window.currentUser;
    // } else {
    //     store = configureStore();
    // }
    
    const root = document.getElementById("root");
    ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
          
            <App /> 
       
        </BrowserRouter>
      </Provider>, root);
    window.getState = store.getState;
});

