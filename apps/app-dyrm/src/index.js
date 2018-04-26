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
import { HashRouter, Route } from "react-router-dom";
//=============================================================================
import routes from "./routes";
import storeFactory from "./store/storeFactory";
import App from "./components/App";
//=============================================================================
// setup all reducers (event listeners)
const store = storeFactory();
//=============================================================================
render(
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={App} />
    </HashRouter>
  </Provider>,
  document.getElementById("app")
);
//=============================================================================
