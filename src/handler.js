const fs = require("fs");
const path = require("path");
const DataName = require("./DataName.json");
const querystring = require("querystring");

function handelHomePage(req, res) {
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

function handelAutoComplete(req,res){
  var TheData = "";
  var array = [];
  req.on("data", function(Data) {
    TheData += Data;
  });
  req.on("end", function() {
    res.writeHead(200, { "content-type": "application/json" });
    console.log("someone in search endpoint");
    // wordAutoComplete=a
    var data = querystring.parse(TheData);
    //{ wordAutoComplete: a }
    console.log(TheData,"TheData");
    console.log(data,"data");
    for(let ele of DataName){
      if (ele.toLowerCase().startsWith(data.wordAutoComplete.toLowerCase())) 
        array.push(ele);
      if(array.length == 10)
        break;
    }
    console.log(array, "array");
    res.end(JSON.stringify(array));
  });  
}


module.exports = {handelAutoComplete, serverStaticFile, handelHomePage, handelError };