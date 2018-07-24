var fs = require("fs");
var path = require("path");
// var nameMovies = require("./nameMovies.txt");


function handelhomepage(req, res) {
  res.writeHead(200, { "content-type": "text/html" });
  fs.readFile(path.join(__dirname, "..", "public/index.html"), function( err,file ) {
    if (err) {
      console.log(err);
    } else {
      console.log(__dirname);
      res.end(file);
    }
  });
}

function serverStaticFile(req, res) {
  var endponit = req.url;
  var extention = endponit.split(".")[1];
  //js
  //html
  //css
  console.log(endponit.split("."), "jjjjjj");
  var contenttype = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    jpg: "image/jpg",
    png: "image/png",
    json:"application/json"
  };
  console.log(endponit, "ssss");
  res.writeHead(200, { "content-type": contenttype[extention] });
  fs.readFile(path.join(__dirname, "..", endponit), function(err, file) {
    if (err) {
      console.log(err);
    } else {
      console.log(__dirname);
      res.end(file);
    }
  });
}

function handelError(res) {
  res.writeHead(404, { "content-type": "text/html" });
  res.end("<h1>page not found 404 </h1>");
}

function filterWord(arr, value) {
  return arr.filter(function(x) {
    x.indexOf(value) == 0;
  });
}


module.exports = { serverStaticFile, handelhomepage, handelError };
