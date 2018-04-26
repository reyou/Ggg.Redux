//=============================================================================
// http://localhost:8080/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
/*The map() method creates a new array with the results of calling a provided 
function on every element in the calling array. */
//=============================================================================
import React from "react";
import ReactDOM from "react-dom";

/*The Provider from react-redux helps us to make the store and its 
functionalities available in all child components. The only thing we have to 
do is to initiate our store and wrap our child components within the Provider 
component. At the end the Provider component uses the store as property. */
import { Provider } from "react-redux";
import Stream from "./components/Stream";

//=============================================================================
import configureStore from "./stores/configureStore";
import * as actions from "./actions";
//=============================================================================
const tracks = [
  {
    title: "Some track"
  },
  {
    title: "Some other track"
  }
];
/*The store is a singleton Redux object and holds our global state object. 
Moreover it is possible to use a lightweight store API to dispatch an action, 
get the state of the store or subscribe to the store when updates occur. */
const store = configureStore();
store.dispatch(actions.setTracks(tracks));
// async
store.dispatch(actions.getUsers()).then(() => {
  console.log("ggg", "src-index.js:", "users fetched.");
  // console.log(store.getState());
});
ReactDOM.render(
  <Provider store={store}>
    <Stream />
  </Provider>,
  document.getElementById("app")
);

// https://github.com/reactjs/react-redux/releases/tag/v2.0.0
// module.hot.accept();
