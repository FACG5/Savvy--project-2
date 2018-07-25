const dataName = require("./DataBrand1.json");

function getData(data) {
  var arr = [];
  for (let ele of dataName) {
    if (ele.toLowerCase().startsWith(data.wordAutoComplete.toLowerCase()))
      arr.push(ele);
    if (arr.length >3)
      break;
  }
  return arr;
}

module.exports = getData;
