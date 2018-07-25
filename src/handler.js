const fs = require("fs");
const path = require("path");
const getData = require("./accessData");
const querystring = require("querystring");

function handelHomePage(req, res) {
  res.writeHead(200, {
    "content-type": "text/html"
  });
  fs.readFile(path.join(__dirname, "..", "public/index.html"), function(
    err,
    file
  ) {
    if (err) {
      console.log(err);
    } else {
      res.end(file);
    }
  });
}

function serverStaticFile(req, res) {
  var endponit = req.url;
  var extention = endponit.split(".")[1];
  var contenttype = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    jpg: "image/jpg",
    png: "image/png",
    json: "application/json",
    jpeg: "image/jpg"
  };
  res.writeHead(200, {
    "content-type": contenttype[extention]
  });
  fs.readFile(path.join(__dirname, "..", endponit), function(err, file) {
    if (err) {
      console.log(err);
    } else {
      res.end(file);
    }
  });
}

function handelError(res) {
  res.writeHead(404, {
    "content-type": "text/html"
  });
  res.end("<h1>page not found 404 </h1>");
}

function handelAutoComplete(req, res) {
  var TheData = "";
  req.on("data", function(Data) {
    TheData += Data;
  });
  req.on("end", function() {
    res.writeHead(200, {
      "content-type": "application/json"
    });
    var data = querystring.parse(TheData);
    var arr = getData(data);
    res.end(JSON.stringify(arr));
  });
}

module.exports = {
  handelAutoComplete,
  serverStaticFile,
  handelHomePage,
  handelError
};
