import { createStore, applyMiddleware } from "redux";
// https://github.com/gaearon/redux-thunk
// https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/index";
import { createLogger } from "redux-logger";
/*The Redux store is aware of a middleware, which can be used to do 
something between dispatching an action and the moment it reaches the 
reducer. There is already a lot of middleware for Redux out there. 
Let’s use the logger middleware for the beginning. */
const logger = createLogger();
/*The logger middleware shows us console output for each action: 
the previous state, the action itself and the next state. It helps 
us to keep track of our state changes in our application. */
const createStoreWithMiddleware = applyMiddleware(logger, thunkMiddleware)(
  createStore
);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
