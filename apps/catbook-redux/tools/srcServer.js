import express from "express";
// https://expressjs.com/en/resources/middleware/body-parser.html
const bodyParser = require("body-parser");
import webpack from "webpack";
import path from "path";
import config from "../webpack.config.dev";
import open from "open";
import favicon from "serve-favicon";
let cors = require("cors");
//=============================================================================
import GggLogger from "../src/gggUtils/GggLogger";
import GggUtils from "../src/gggUtils/GggUtils";
let CatManager = require("./CatManager");
let HobbyManager = require("./HobbyManager");
//=============================================================================
/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);
/*https://github.com/glenjamin/webpack-hot-middleware
 Webpack hot reloading you can attach to your own server*/
app.use(require("webpack-hot-middleware")(compiler));
app.use(favicon(path.join(__dirname, "assets", "public", "favicon.ico")));

// http://localhost:3000
// http://localhost:5000/api/v1/cats
app.get("/api/v1/cats", function(req, res) {
  try {
    let allCats = CatManager.getAllCats();
    res.json(allCats);
  } catch (e) {
    GggLogger.log("/api/v1/cats: " + e);
    res.json(e);
  }
});

app.post("/api/v1/cats", function(req, res) {
  try {
    let cat = req.body.cat;
    GggLogger.log("catToCreate:");
    GggLogger.log(GggUtils.serialize(cat));
    let createdCat = CatManager.createCat(cat);
    res.json(createdCat);
  } catch (e) {
    GggLogger.log("/api/v1/cats: " + e);
    res.json(e);
  }
});

// http://localhost:3000
// http://localhost:5000/api/v1/cats/1
// https://jsoneditoronline.org/
// https://www.freeformatter.com/java-dotnet-escape.html#ad-output
// https://fooception.loggly.com/live_tail/
app.put("/api/v1/cats/:id", function(req, res) {
  let catToUpdate = req.body.cat;
  GggLogger.log("updatedCat: " + GggUtils.serialize(catToUpdate));
  try {
    let updatedCat = CatManager.updateCat(catToUpdate);
    res.json(updatedCat);
  } catch (e) {
    GggLogger.log("/api/v1/cats: " + e);
    res.json(e);
  }
});

app.delete("/api/v1/cats/:id", function(req, res) {
  let catToDelete = req.params.id;
  GggLogger.log("catToDelete: " + GggUtils.serialize(catToDelete));
  try {
    CatManager.deleteCat(catToDelete);
    res.json("OK");
  } catch (e) {
    GggLogger.log("/api/v1/cats: " + e);
    res.json(e);
  }
});

// http://localhost:5000/api/v1/hobbies
app.get("/api/v1/hobbies", function(req, res) {
  try {
    let allItems = HobbyManager.getAllHobbies();
    res.json(allItems);
  } catch (e) {
    GggLogger.log("/api/v1/hobbies: " + e);
    res.json(e);
  }
});

// http://localhost:5000/api/v1/generateCats
app.get("/api/v1/generateCats", function(req, res) {
  try {
    let catCount = 1;
    let allCats = CatManager.generateCats(catCount);
    res.json(allCats);
  } catch (e) {
    GggLogger.log(e);
    res.json(e);
  }
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

// ui
app.listen(port, function(err) {
  if (err) {
    GggLogger.log(err);
  } else {
    GggLogger.log("UI Server Started");
    // open(`http://localhost:${port}`);
  }
});

// api
const apiPort = 5000;
app.listen(apiPort, function(err) {
  if (err) {
    GggLogger.log("Ggg.ApiError:" + err);
  } else {
    GggLogger.log("API Server Started");
    // open(`http://localhost:${apiPort}`);
  }
});
