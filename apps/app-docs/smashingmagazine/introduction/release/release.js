"use strict";

//=============================================================================
// https://www.smashingmagazine.com/2016/06/an-introduction-to-redux/#build-an-app
//=============================================================================
// 1- cd D:\Git\Ggg\Ggg.Redux\app\smashingmagazine\introduction
// 2- npx babel debug/ --out-file release/release.js --watch
//=============================================================================
// reducer
var auth = function auth() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { status: "logged out", value: "guest" };
  var action = arguments[1];

  switch (action.type) {
    case "LOGIN":
      return Object.assign({}, state, {
        status: "logged in",
        value: action.value
      });
    case "LOGOUT":
      return Object.assign({}, state, {
        status: "logged out",
        value: action.value
      });
    default:
      return state;
  }
};

// store
var _Redux = Redux,
    createStore = _Redux.createStore;

var store = createStore(auth);

// react component
var Auth = React.createClass({
  displayName: "Auth",

  handleLogin: function handleLogin() {
    // https://reactjs.org/docs/refs-and-the-dom.html
    var username = this.refs.username.value;
    // dispatch action
    store.dispatch({
      type: "LOGIN",
      value: username
    });
  },
  handleLogout: function handleLogout() {
    // dispatch action
    store.dispatch({
      type: "LOGOUT",
      value: "guest"
    });
    this.refs.username.value = "";
  },
  render: function render() {
    var button = void 0;
    if (this.props.state.status === "logged in") {
      button = React.createElement(
        "button",
        { onClick: this.handleLogout },
        "Log out"
      );
    } else {
      button = React.createElement("input", { type: "button", value: "Login", onClick: this.handleLogin });
    }

    return React.createElement(
      "div",
      null,
      React.createElement("input", { type: "text", ref: "username" }),
      button,
      React.createElement(
        "h1",
        null,
        "Current state is",
        " ",
        this.props.state.status + " as " + this.props.state.value
      )
    );
  }
});

var render = function render() {
  ReactDOM.render(React.createElement(Auth, { state: store.getState() }), document.getElementById("root"));
};

store.subscribe(render);
render();

//=============================================================================
