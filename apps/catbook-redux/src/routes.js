// http://www.thegreatcodeadventure.com/react-redux-tutorial-part-ii-react-router-and-container-components/
// https://github.com/SophieDeBenedetto/catbook-redux/blob/blog-post/src/routes.js
//=============================================================================
import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import CatsPage from "./components/cats/CatsPage";
import AboutPage from "./components/about/AboutPage";
import CatPage from "./components/cats/CatPage";
import NewCatPage from "./components/cats/NewCatPage";
import LogInPage from "./components/LogInPage";
import auth from "./auth/authenticator";

// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/login" component={LogInPage} />
    {/* https://github.com/ReactTraining/react-router/blob/v3.0.0/docs/API.md#onenternextstate-replace-callback */}
    <Route path="/cats" component={CatsPage} onEnter={requireAuth}>
      <Route path="/cats/new" component={NewCatPage} />
      <Route path="/cats/:id" component={CatPage} />
    </Route>
    <Route path="/about" component={AboutPage} />
  </Route>
);

function requireAuth(nextState, replace) {
  console.log("routes.js", "auth.loggedIn()", auth.loggedIn());
  if (!auth.loggedIn()) {
    replace({
      pathname: "/login",
      state: {
        nextPathname: nextState.location.pathname
      }
    });
  }
}

//=============================================================================
