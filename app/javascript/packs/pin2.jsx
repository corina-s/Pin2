// // Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// // like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// // of the page.

// import React from 'react'
// import ReactDOM from 'react-dom'
// import Root from '../components/root';
// import configureStore from "../store/store";


// document.addEventListener("DOMContentLoaded", () => {
//     // let store;
//     // // if (window.currentUser) {
//     // //     const preloadedState = { session: { id: window.currentUser.id }, entities: {users: {[window.currentUser.id]: window.currentUser}} };
//     // //     store = configureStore(preloadedState);
//     // //     delete window.currentUser;
//     // // } else {
//         let store = configureStore();
  
//     const root = document.getElementById("root");
    
//     ReactDOM.render(<Root store={store} />, root);
//     window.getState = store.getState;
// });

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import './pin2.css';
import App from '../app';
import { store, persistor } from '../redux/store'
// import * as serviceWorker from './serviceWorker';
document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <App /> 
          </PersistGate>
        </BrowserRouter>
      </Provider>,
      document.getElementById('root')
    );
    
});
