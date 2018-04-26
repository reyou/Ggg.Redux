// https://redux.js.org/recipes/using-object-spread-operator
import * as actionTypes from "../constants/actionTypes";
export default function(state, action) {
  var date = new Date();
  let dateTime = date.toString();
  return {
    ...state,
    gggTime: dateTime
  };
}
