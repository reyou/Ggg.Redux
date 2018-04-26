// https://github.com/SophieDeBenedetto/catbook-redux/blob/blog-post/src/reducers/index.js
//=============================================================================
import { combineReducers } from "redux";
import usersReducer from "./usersReducer";

const combinedReducers = combineReducers({
  // short hand property names
  usersReducer
});

export default combinedReducers;
//=============================================================================
