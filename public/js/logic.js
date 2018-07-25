
function boldLatter(arr, value) {
  return arr.map((ele) => {
    return ele.substr(0, value.length).toUpperCase() + ele.substr(value.length);
  })
}

if (typeof module !== "undefined") {
  module.exports = boldLatter;

}
