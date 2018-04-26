import * as types from "../actions/actionTypes";
export default function genericReducer(state = null, action) {
  switch (action.type) {
    case types.LOAD_HOME_ITEMS:
      let homeItems = getHomePageItems();
      /*Copy the values of all of the enumerable own properties 
      from one or more source objects to a target object. Returns the target object. */
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
      const newState = Object.assign({ homeItems: homeItems }, state);
      return newState;
    default:
      return state;
  }
}

function getHomePageItems() {
  let items = [];
  let homeItem = {
    title: "User List",
    url: "/userList"
  };
  items.push(homeItem);
  return items;
}
