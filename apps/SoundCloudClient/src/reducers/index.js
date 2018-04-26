/*Saving us some refactoring, I already use a helper function 
combineReducers here. Normally you would start to export one plain 
reducer. That reducer would return the whole state. When you use 
combineReducers, you are able to have multiple reducers, where each 
reducer only returns a substate. Without combineReducers you would 
access your tracks in the global state with state.tracks. But with 
combineReducers you get these intermediate layer to get to the subset 
of states produced by multiple reducers. In that case state.track.tracks 
where track is our substate to handle all track states in the future. */
import { combineReducers } from "redux";
import track from "./track";
import gggTimer from "./gggTimer";
import gggUsers from "./gggUsers";
/*Turns an object whose values are different reducer functions, into 
a single reducer function. It will call every child reducer, and gather 
their results into a single state object, whose keys correspond to the 
keys of the passed reducer functions. */
export default combineReducers({
  track,
  gggTimer,
  gggUsers
});
