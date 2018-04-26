// https://www.sohamkamani.com/blog/2016/06/05/redux-apis/
//=============================================================================
// https://github.com/visionmedia/superagent
// Ajax with less suck - (and node.js HTTP client to match)
import request from "superagent";
//=============================================================================
// https://redux.js.org/api-reference/applymiddleware
/*...middleware (arguments): Functions that conform to the Redux middleware API. 
Each middleware receives Store's dispatch and getState functions as named arguments, 
and returns a function. That function will be given the next middleware's dispatch method, 
and is expected to return a function of action calling next(action) with a potentially 
different argument, or at a different time, or maybe not calling it at all. 
The last middleware in the chain will receive the real store's dispatch method as the 
next parameter, thus ending the chain. So, the middleware signature is 
({ getState, dispatch }) => next => action. */
//=============================================================================
// "/data/todo-data.json
// D:\Git\Ggg\Ggg.Redux\apps\todomvc\src\services\api-service.js
const getApiGenerator = next => (route, name) =>
  request.get("http://localhost:3001" + route).end((err, res) => {
    console.log("services-data-service.js.getApiGenerator.res:");
    console.log(res);
    if (err) {
      return next({
        type: "GET_TODO_DATA_ERROR",
        err
      });
    }
    try {
      const data = JSON.parse(res.text);
      console.log("services-data-service.js.getApiGenerator.next:");
      console.log("GET_TODO_DATA_RECEIVED");
      next({
        type: "GET_TODO_DATA_RECEIVED",
        data
      });
    } catch (ex) {
      console.log(ex);
    }
  });

const dataService = store => next => action => {
  console.log("services-data-service.js.action:");
  console.log(action);
  next(action);
  const getApi = getApiGenerator(next);
  switch (action.type) {
    case "GET_TODO_DATA":
      //http://localhost:3000/data/todo-data.json
      getApi("/data/todo-data.json", "GET_TODO_DATA");
      break;
    default:
      break;
  }
};

export default dataService;

//=============================================================================
