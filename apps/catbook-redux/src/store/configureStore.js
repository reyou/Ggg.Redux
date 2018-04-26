// https://github.com/SophieDeBenedetto/catbook-redux/blob/blog-post/src/store/configureStore.js
// http://www.thegreatcodeadventure.com/react-redux-tutorial-part-iii-async-redux/
//=============================================================================
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
// https://github.com/leoasis/redux-immutable-state-invariant
/*Redux middleware that spits an error on you when you try to mutate your state 
either inside a dispatch or between dispatches. For development use only! */
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
//=============================================================================
/*Connect our store to the rootReducer, which we'll define soon. 
Our root reducer will wrap up our individual reducers.  */
export default function configureStore() {
  console.log("configureStore.js", "configureStore");
  return createStore(rootReducer, applyMiddleware(thunk));
}
//=============================================================================
