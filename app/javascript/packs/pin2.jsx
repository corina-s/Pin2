// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import Root from '../components/root';
import configureStore from "../store/store";


document.addEventListener("DOMContentLoaded", () => {
    // let store;
    // // if (window.currentUser) {
    // //     const preloadedState = { session: { id: window.currentUser.id }, entities: {users: {[window.currentUser.id]: window.currentUser}} };
    // //     store = configureStore(preloadedState);
    // //     delete window.currentUser;
    // // } else {
        let store = configureStore();
  
    const root = document.getElementById("root");
    
    ReactDOM.render(<Root store={store} />, root);
    window.getState = store.getState;
});