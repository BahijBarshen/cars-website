import reactDom from 'react-dom/client'
import App from './App';
import React from 'react';
// import globalestore from './store/store.js';
// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';
// import {api} from './store/Api.js';
// import { setupListeners } from '@reduxjs/toolkit/query';
const root = reactDom.createRoot(document.getElementById("root"));
// const store=configureStore({
//     reducer:{
//         global:globalestore,
//         [api.reducerPath]:api.reducer,
//     },
//     middleware:(getdefault)=>getdefault().concat(api.middleware)
// })
// setupListeners(store.dispatch);
root.render(
    <React.StrictMode>
            <App />
    </React.StrictMode>

);