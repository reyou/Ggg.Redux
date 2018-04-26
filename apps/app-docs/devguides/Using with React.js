//=============================================================================
// http://devguides.io/redux/react
// https://www.npmjs.com/package/react-redux
//=============================================================================
/*import React from 'react' 
import { render } from 'react-dom' 
import { createStore } from 'redux' 
import { Provider } from 'react-redux'
 */
const React = require("react");
const render = require("react-dom").render;
const createStore = require("redux").createStore;
const Provider = require("react-redux").Provider;
//=============================================================================
var todoApp = function(store, action) {};
let store = createStore(todoApp);
//=============================================================================

//=============================================================================
