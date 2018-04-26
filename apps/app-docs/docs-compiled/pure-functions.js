"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//=============================================================================
// Changes are made with pure functions
// https://redux.js.org/docs/introduction/ThreePrinciples.html#changes-are-made-with-pure-functions
//=============================================================================
function visibilityFilter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "SHOW_ALL";
  var action = arguments[1];

  //   console.log("visibilityFilter.action.type:");
  //   console.log(action.type);
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
}
function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  //   console.log("todos.action.type:");
  //   console.log(action.type);
  switch (action.type) {
    case "ADD_TODO":
      return [].concat(_toConsumableArray(state), [{
        text: action.text,
        completed: false
      }]);
    case "COMPLETE_TODO":
      return state.map(function (todo, index) {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          });
        }
        return todo;
      });
    default:
      return state;
  }
}
// import { combineReducers, createStore } from "redux";
var redux = require("redux");
var combineReducers = redux.combineReducers;
var createStore = redux.createStore;
var reducer = combineReducers({ visibilityFilter: visibilityFilter, todos: todos });
var store = createStore(reducer);

store.subscribe(function () {
  var state = store.getState();
  //   console.log("state:");
  //   console.log(state);
  console.log("state.todos[0]:");
  console.log(state.todos[0]);
});

store.dispatch({ type: "SET_VISIBILITY_FILTER", filter: "ggg-filter" });
store.dispatch({ type: "ADD_TODO", text: "cut the grass" });
//=============================================================================