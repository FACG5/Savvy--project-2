
function boldLetter(arr, value) {
  return arr.map((ele) => ele.substr(0, value.length).toUpperCase() + ele.substr(value.length))
 }

if (typeof module !== "undefined") {
  module.exports = boldLetter;
}
