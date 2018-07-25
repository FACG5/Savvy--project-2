const test = require('tape');
const getData = require('./../src/accessData');
const boldLatter = require('./../public/js/logic.js');

test("test for getData function ", (t) => {
  obj = {
    wordAutoComplete: 'a'
  };
  const actual = getData(obj).length;
  const expected = 4;
  t.equal(actual, expected, "function should retutn 4 results");
  t.end();
});
test("test for getData function ", (t) => {
  obj = {
    wordAutoComplete: 'a'
  };
  const actual = getData(obj)[0][0];
  const expected = 'A';
  t.equal(actual, expected, "first element should have capital a");
  t.end();
});
test("test for boldLatter function ", (t) => {
  var arr = ['hand', 'head', 'heel'];
  var val = 'h';
  const actual = boldLatter(arr, val);
  const expected = ['Hand', 'Head', 'Heel'];
  t.deepEqual(actual, expected, "function should retutn capitalized elements ");
  t.end();
});
