const DataName = require("./DataBrand1.json");

function getData(data) {
  var arr = [];
  for (let ele of DataName) {
    console.log(ele)
    if (ele.toLowerCase().startsWith(data.wordAutoComplete.toLowerCase()))
      arr.push(ele);
    if (arr.length == 10)
      break;
  }
  return arr;
}

module.exports = getData;
