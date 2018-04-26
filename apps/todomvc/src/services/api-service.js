// https://scotch.io/tutorials/use-expressjs-to-deliver-html-files
var express = require("express");
var app = express();
var path = require("path");
var cors = require("cors");
//=============================================================================
// https://expressjs.com/en/starter/static-files.html
//=============================================================================
// https://github.com/expressjs/cors
app.use(cors());
//=============================================================================
class ApiService {
  static setup() {
    app.get("/", function(req, res) {
      res.status(200).send("ok");
    });

    app.get("/:folderName/:fileName", function(req, res) {
      let folderName = req.params.folderName;
      let fileName = req.params.fileName;
      console.log("ApiService.get.folderName:");
      console.log(folderName);
      console.log("ApiService.get.fileName:");
      console.log(fileName);
      let pathCombined = path.join(
        __dirname + "/../../" + folderName + "/" + fileName
      );
      console.log("ApiService.get.pathCombined:");
      console.log(pathCombined);
      res.sendFile(pathCombined);
    });
    var server = app.listen(3001, function() {
      var port = server.address().port;
      console.log("App listening at port %s", port);
      console.log("http://localhost:" + port);
    });
  }
}

ApiService.setup();
