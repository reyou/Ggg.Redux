import * as actionTypes from "../constants/actionTypes";
export default function(state = [], action) {
  switch (action.type) {
    case actionTypes.GGG_GET_USERS:
      console.log("actionTypes.GGG_GET_USERS");
      break;
    case actionTypes.GGG_GET_USERS_COMPLETED:
      return {
        ...state,
        users: action.users
      };
      break;
  }
  return state;
}
