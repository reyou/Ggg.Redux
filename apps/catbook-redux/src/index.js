// http://www.thegreatcodeadventure.com/react-redux-tutorial-part-ii-react-router-and-container-components/
// http://www.thegreatcodeadventure.com/react-redux-tutorial-part-iii-async-redux/
//=============================================================================
/*eslint-disable import/default */
// https://babeljs.io/docs/usage/polyfill/
/*Because this is a polyfill (which will run before your source code), we need 
it to be a dependency, not a devDependency */
import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
// https://github.com/ReactTraining/react-router/blob/435239c8d957af85ab69d0415d08f184b9faf125/packages/react-router/docs/guides/migrating.md#the-router
import { Router, browserHistory } from "react-router";
import routes from "./routes";
import { loadCats } from "./actions/catActions";
import { loadHobbies } from "./actions/hobbyActions";
//=============================================================================
// setup all reducers (event listeners)
const store = configureStore();
// https://redux.js.org/api-reference/store#dispatch(action)
/*Dispatches an action. This is the only way to trigger a state change.
The store's reducing function will be called with the current getState() result 
and the given action synchronously. Its return value will be considered the next state. 
It will be returned from getState() from now on, and the change listeners will immediately 
be notified. */
// dispatch some events (call events)
console.log("index.js", "store.dispatch(loadCats());");
store.dispatch(loadCats());
console.log("index.js", "store.dispatch(loadHobbies());");
store.dispatch(loadHobbies());
//=============================================================================
/*Note that we're using browserHistory as our Router's history. 
browserHistory is the recommended history for URL manipulation with React Router, 
allowing us to build semantic URLs that look like /cats/new or cats/7.
 */
/*render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById("app")
); */
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("app")
);
//=============================================================================
