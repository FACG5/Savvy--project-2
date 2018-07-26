const dataName = require("./DataBrand.json");

function getData(data) {
  return dataName.filter(function(word){ 
    return word.toLowerCase().startsWith(data.wordAutoComplete.toLowerCase())
  })
}

module.exports = getData;
