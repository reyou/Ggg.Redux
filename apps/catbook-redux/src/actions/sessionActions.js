import * as types from "./actionTypes";
import sessionApi from "../api/SessionApi";
import auth from "../auth/authenticator";

export function loginSuccess() {
  return { type: types.LOG_IN_SUCCESS };
}

export function loginUser(credentials) {
  return function(dispatch) {
    return sessionApi
      .login(credentials)
      .then(response => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
        sessionStorage.setItem("jwt", response.jwt);
        dispatch(loginSuccess());
      })
      .catch(error => {
        throw error;
      });
  };
}

export function logOutUser() {
  auth.logOut();
  return { type: types.LOG_OUT };
}
