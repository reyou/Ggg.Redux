// https://github.com/SophieDeBenedetto/catbook-redux/blob/blog-post/src/reducers/hobbyReducer.js
// http://www.thegreatcodeadventure.com/react-redux-tutorial-part-v-the-show-feature/
//=============================================================================
import * as types from "../actions/actionTypes";
import initialState from "./initialState";
//=============================================================================
export default function courseReducer(state = initialState.hobbies, action) {
  console.log("hobbyReducer.js", "action.type:", action.type);
  switch (action.type) {
    case types.LOAD_HOBBIES_SUCCESS:
      return action.hobbies;
    default:
      return state;
  }
}
//=============================================================================
