import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./containers/App";
// D:\Git\Ggg\Ggg.Redux\apps\todomvc\src\reducers\todos.js
import reducer from "./reducers";
import "todomvc-app-css/index.css";
//=============================================================================
// https://www.npmjs.com/package/redux-thunk#motivation
// https://redux.js.org/advanced/async-actions#index.js
import thunkMiddleware from "redux-thunk";
//=============================================================================
import dataService from "./services/data-service";
//=============================================================================
// debugger;
/*Creates a Redux store that holds the complete state tree of your app.
There should only be a single store in your app. */
// reducer, preloadedState, enhancer
/*Middleware lets you wrap the store's dispatch method for fun and profit.
The most common use case for middleware is to support asynchronous actions */
// https://redux.js.org/api-reference/createstore
// https://redux.js.org/api-reference/applymiddleware
const store = createStore(
  reducer,
  {},
  applyMiddleware(thunkMiddleware, dataService)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
store.dispatch({ type: "GET_TODO_DATA" });
