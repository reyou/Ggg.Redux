// https://github.com/SophieDeBenedetto/catbook-redux/blob/blog-post/src/reducers/index.js
//=============================================================================
import { combineReducers } from "redux";
import genericReducer from "./genericReducer";
import usersReducer from "./usersReducer";

const combinedReducers = combineReducers({
  // short hand property names
  usersReducer,
  genericReducer
});

export default combinedReducers;
//=============================================================================
