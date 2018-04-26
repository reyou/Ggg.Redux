// http://www.thegreatcodeadventure.com/react-redux-tutorial-part-iii-async-redux/
// https://github.com/SophieDeBenedetto/catbook-redux/blob/blog-post/src/actions/catActions.js
// https://redux.js.org/basics/actions
//=============================================================================
/*Actions are payloads of information that send data from your application to your 
store. They are the only source of information for the store. You send them to the 
store using store.dispatch(). For ex: dispatch(loadCatsSuccess(cats)); */
/*Other than type, the structure of an action object is really up to you.*/
/*It's a good idea to pass as little data in each action as possible. For example, 
it's better to pass index than the whole todo object. */
//=============================================================================
import * as types from "./actionTypes";
import catApi from "../api/CatsApi";
//=============================================================================
export function loadCatsSuccess(cats) {
  console.log("catActions.js", "loadCatsSuccess(cats)", cats.length);
  return {
    type: types.LOAD_CATS_SUCCESS,
    cats
  };
}

export function updateCatSuccess(cat) {
  console.log("catActions.js", "updateCatSuccess(cat)", cat);
  return {
    type: types.UPDATE_CAT_SUCCESS,
    cat
  };
}

export function createCatSuccess(cat) {
  console.log("catActions.js", "createCatSuccess(cat)", cat);
  return {
    type: types.CREATE_CAT_SUCCESS,
    cat
  };
}

export function deleteCatSuccess(cat) {
  console.log("catActions.js", "deleteCatSuccess(cat)", cat);
  return {
    type: types.DELETE_CAT_SUCCESS,
    cat
  };
}

export function loadCats() {
  console.log("catActions.js", "loadCats();");
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    console.log("catActions.js", "loadCats();", "dispatch");
    return catApi
      .getAllCats()
      .then(cats => {
        console.log("catActions.js", "catApi.getAllCats().then(cats)");
        console.log("catActions.js", "dispatch(loadCatsSuccess(cats));");
        dispatch(loadCatsSuccess(cats));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function updateCat(cat) {
  console.log("catActions.js", "updateCat(cat)", cat);
  return function(dispatch) {
    return catApi
      .updateCat(cat)
      .then(responseCat => {
        dispatch(updateCatSuccess(responseCat));
      })
      .catch(error => {
        console.log("catActions.js", "updateCat", error);
        throw error;
      });
  };
}

export function createCat(cat) {
  console.log("catActions.js", "createCat(cat)", cat);
  return function(dispatch) {
    return catApi
      .createCat(cat)
      .then(responseCat => {
        dispatch(createCatSuccess(responseCat));
        return responseCat;
      })
      .catch(error => {
        throw error;
      });
  };
}

export function deleteCat(cat) {
  console.log("catActions.js", "deleteCat(cat)", cat);
  return function(dispatch) {
    return catApi
      .deleteCat(cat)
      .then(() => {
        console.log(`Deleted ${cat.id}`);
        dispatch(deleteCatSuccess(cat));
        return;
      })
      .catch(error => {
        throw error;
      });
  };
}

//=============================================================================
