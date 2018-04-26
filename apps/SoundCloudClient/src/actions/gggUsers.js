// https://redux.js.org/advanced/async-actions
// https://jsonplaceholder.typicode.com/users
// https://www.npmjs.com/package/fetch-everywhere
// npm i fetch-everywhere --save
require("fetch-everywhere");
import * as actionTypes from "../constants/actionTypes";
/*Our first action creator takes as input some tracks which 
we want to set to our global state. It returns an object with an 
action type and a payload. */

export function gggGetUsersCompleted(users) {
  return {
    type: actionTypes.GGG_GET_USERS_COMPLETED,
    users
  };
}

export function getUsers() {
  let url = "https://jsonplaceholder.typicode.com/users";
  // source file is iso-8859-15 but it is converted to utf-8 automatically
  return function(dispatch) {
    return fetch(url)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(users) {
        // console.log("getUsers.users:");
        // console.log(users);
        dispatch(gggGetUsersCompleted(users));
      });
  };
}
