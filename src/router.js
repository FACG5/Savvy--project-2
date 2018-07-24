const { serverStaticFile, handelhomepage, handelError } = require("./handler");
const DataName = require("./DataName.json");
const querystring = require("querystring");
function router(req, res) {
  var endponit = req.url;
  if (endponit === "/") {
    handelhomepage(req, res);
  } else if (endponit.includes("public")) {
    serverStaticFile(req, res);
  } else if (endponit.includes("search")) {
    var TheData = "";
    var array = [];
    
    req.on("data", function(Data) {
      TheData += Data;
    });
    req.on("end", function() {
        
        console.log("someone in search endpoint");
        
        // var theDataa = querystring.parse(TheData); 
        console.log(TheData,"55555")
        DataName.forEach(ele => {
            //part

            console.log(TheData);
            if (ele.startsWith(TheData.name1)){ 
           
                array.push(ele);
            }
        });
        console.log(array,"array");
      res.end(JSON.stringify(array));
    });
  } else {
    handelError(res);
  }
}

module.exports = router;
