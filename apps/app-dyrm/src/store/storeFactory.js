// https://github.com/SophieDeBenedetto/catbook-redux/blob/blog-post/src/store/configureStore.js
// http://www.thegreatcodeadventure.com/react-redux-tutorial-part-iii-async-redux/
//=============================================================================
import { createStore, applyMiddleware } from "redux";
import combinedReducers from "../reducers/index";
import thunk from "redux-thunk";
//=============================================================================
/*Connect our store to the rootReducer, which we'll define soon. 
Our root reducer will wrap up our individual reducers.  */
export default function storeFactory() {
  return createStore(combinedReducers, applyMiddleware(thunk));
}
//=============================================================================
