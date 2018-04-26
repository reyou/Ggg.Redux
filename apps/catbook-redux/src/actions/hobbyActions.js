// http://www.thegreatcodeadventure.com/react-redux-tutorial-part-v-the-show-feature/
// https://github.com/SophieDeBenedetto/catbook-redux/blob/blog-post/src/actions/hobbyActions.js
//=============================================================================
import * as types from "./actionTypes";
import hobbyApi from "../api/HobbyApi";
//=============================================================================

export function loadHobbiesSuccess(hobbies) {
  console.log("hobbyActions.js", "loadHobbiesSuccess(hobbies)", hobbies.length);
  return {
    type: types.LOAD_HOBBIES_SUCCESS,
    hobbies
  };
}

export function loadHobbies() {
  console.log("hobbyActions.js", "loadHobbies()");
  return function(dispatch) {
    console.log("hobbyActions.js", "function(dispatch)");
    return hobbyApi
      .getAllHobbies()
      .then(hobbies => {
        console.log(
          "hobbyActions.js",
          "hobbyApi.getAllHobbies().then(hobbies)"
        );
        console.log(
          "hobbyActions.js",
          "dispatch(loadHobbiesSuccess(hobbies));"
        );
        dispatch(loadHobbiesSuccess(hobbies));
      })
      .catch(error => {
        throw error;
      });
  };
}
//=============================================================================
