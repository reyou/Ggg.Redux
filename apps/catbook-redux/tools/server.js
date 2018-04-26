//=============================================================================
// http://www.thegreatcodeadventure.com/building-a-simple-crud-app-with-react-redux-part-1/
//=============================================================================
import express from "express";
import webpack from "webpack";
import path from "path";
import config from "../webpack.config.dev";
import open from "open";
import favicon from "serve-favicon";
//=============================================================================
/* eslint-disable no-console */
//=============================================================================
const port = 3000;
const app = express();
const compiler = webpack(config);
app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);
app.use(require("webpack-hot-middleware")(compiler));
// tools/assets/public/favicon.ico
app.use(favicon(path.join(__dirname, "assets", "public", "favicon.ico")));
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
//=============================================================================
