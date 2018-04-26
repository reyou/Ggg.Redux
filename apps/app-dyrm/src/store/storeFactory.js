// https://github.com/SophieDeBenedetto/catbook-redux/blob/blog-post/src/store/configureStore.js
// http://www.thegreatcodeadventure.com/react-redux-tutorial-part-iii-async-redux/
// https://redux.js.org/api-reference/applymiddleware
//=============================================================================
/*
Middleware is the suggested way to extend Redux with custom functionality. 
Middleware lets you wrap the store's dispatch method for fun and profit. 
The key feature of middleware is that it is composable. Multiple middleware 
can be combined together, where each middleware requires no knowledge of what 
comes before or after it in the chain.
*/
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
