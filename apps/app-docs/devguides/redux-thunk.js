//=============================================================================
// http://devguides.io/redux/actions
// https://www.npmjs.com/package/redux-thunk
// npm install redux-thunk --save
//=============================================================================
// import { createStore } from 'redux';
// import thunk from 'redux-thunk'
const createStore = require("redux").createStore;
const applyMiddleware = require("redux").applyMiddleware;
const thunk = require("redux-thunk");
const fetch = require("node-fetch");
//=============================================================================
var reducer = function(state, action) {};
var store = createStore(reducer, {}, applyMiddleware(thunk));
function load(dispatch, getState) {}

store.dispatch(load);
//=============================================================================
