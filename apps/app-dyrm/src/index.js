//=============================================================================
// http://localhost:8080/
//=============================================================================
// https://www.npmjs.com/package/react
import React from "react";
// https://www.npmjs.com/package/react-dom
import ReactDOM from "react-dom";
import { render } from "react-dom";
// https://www.npmjs.com/package/react-redux
import { Provider } from "react-redux";
// https://www.npmjs.com/package/react-router
// https://reacttraining.com/react-router/web/guides/philosophy
// https://reacttraining.com/react-router/web/api/BrowserRouter
import { BrowserRouter, Route, Switch } from "react-router-dom";
//=============================================================================
import routes from "./routes";
import actions from "./actions";
import storeFactory from "./store/storeFactory";
import App from "./components/App";
import HomePage from "./components/pages/HomePage";
//=============================================================================
// setup all reducers (event listeners)
const store = storeFactory();
//=============================================================================
store.dispatch(actions.loadHomeItems());
//=============================================================================
render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
//=============================================================================
