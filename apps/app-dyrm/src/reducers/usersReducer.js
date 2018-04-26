import * as types from "../actions/actionTypes";
export default function usersReducer(state = null, action) {
  switch (action.type) {
    case types.CREATE_USER:
      return action.user;
    default:
      return state;
  }
}
