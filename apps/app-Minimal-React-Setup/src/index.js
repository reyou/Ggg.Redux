// console.log("My Minimal React Webpack Babel Setup");
// console.log(document.location);
import React from "react";
import ReactDOM from "react-dom";

const title = "My Minimal React Webpack Babel Setup";
// http://localhost:8080/
ReactDOM.render(<div>{title}</div>, document.querySelector("#app"));

module.hot.accept();
