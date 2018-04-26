//=============================================================================
// http://devguides.io/redux/introduction
//=============================================================================
// import { createStore } from 'redux';
const createStore = require("redux").createStore;
//=============================================================================
var album = {
  title: "Kind of Blue",
  artist: "Miles Davis",
  year: 1959,
  price: 50
};
console.log("album.title:");
console.log(album.title);
album.genre = "Jazz";
console.log("album:");
console.log(album);
//=============================================================================
var reducer = function(state, action) {
  switch (action.type) {
    case "PUBLISH":
      return {
        ...state,
        publised: true
      };
    case "SET":
      return {
        ...state,
        price: action.value
      };
    case "ADD":
      return {
        ...state,
        price: state.price + action.value
      };
    default:
      return state;
  }
};
const store = createStore(reducer, album);
var state = store.getState();
console.log("state.title:");
console.log(state.title);
//=============================================================================
store.dispatch({ type: "PUBLISH" });
console.log("store.getState():");
console.log(store.getState());
//=============================================================================
store.dispatch({ type: "SET", value: 200 });
store.dispatch({ type: "ADD", value: 5 });
console.log("store.getState():");
console.log(store.getState());
//=============================================================================
