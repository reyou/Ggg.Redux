//=============================================================================
// http://devguides.io/redux/actions
//=============================================================================
// https://www.npmjs.com/package/node-fetch
// npm install node-fetch --save
//=============================================================================
// import { createStore } from 'redux';
const createStore = require("redux").createStore;
const fetch = require("node-fetch");
//=============================================================================
var reducer = function(state, action) {
  switch (action.type) {
    case "LOAD_START":
      console.log("Loading is starting.");
      return state;
    case "LOAD_FINISH":
      let dataObj = JSON.parse(action.data);
      console.log("Loading is finished: ", dataObj);
      return state;
    case "LOAD_ERROR":
      console.log("Loading has error: ", action.error);
      return state;
    default:
      return state;
  }
};
const store = createStore(reducer, {});
//=============================================================================
// https://jsonplaceholder.typicode.com/
function load(dispatch) {
  dispatch({ type: "LOAD_START" });
  fetch("https://httpbin.org/ip")
    .then(res => res.text())
    .then(data => dispatch({ type: "LOAD_FINISH", data: data }))
    .catch(error => dispatch({ type: "LOAD_ERROR", error: error }));
}

load(store.dispatch);
//=============================================================================
