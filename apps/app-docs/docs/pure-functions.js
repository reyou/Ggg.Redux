//=============================================================================
// Changes are made with pure functions
// https://redux.js.org/docs/introduction/ThreePrinciples.html#changes-are-made-with-pure-functions
//=============================================================================
function visibilityFilter(state = "SHOW_ALL", action) {
  //   console.log("visibilityFilter.action.type:");
  //   console.log(action.type);
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
}
function todos(state = [], action) {
  //   console.log("todos.action.type:");
  //   console.log(action.type);
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case "COMPLETE_TODO":
      return state.map((todo, index) => {
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
const reducer = combineReducers({ visibilityFilter, todos });
const store = createStore(reducer);

store.subscribe(function() {
  var state = store.getState();
  //   console.log("state:");
  //   console.log(state);
  console.log("state.todos[0]:");
  console.log(state.todos[0]);
});

store.dispatch({ type: "SET_VISIBILITY_FILTER", filter: "ggg-filter" });
store.dispatch({ type: "ADD_TODO", text: "cut the grass" });
//=============================================================================
