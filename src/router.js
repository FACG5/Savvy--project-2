const {handelAutoComplete, serverStaticFile, handelHomePage, handelError } = require("./handler");

function router(req, res) {
  const endponit = req.url;
  if (endponit === "/") {
    handelHomePage(req, res);
  } else if (endponit.includes("public")) {
    serverStaticFile(req, res);
  } else if (endponit == "/search") {
    handelAutoComplete(req,res);
  } else {
    handelError(res);
  }
}

module.exports = router;