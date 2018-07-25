const test = require('tape');
const getData = require('./../src/accessData');
const boldLatter = require('./../public/js/logic.js');

test("test for getData function ", (t) => {
  a = {
    wordAutoComplete: 'a'
  };
  const actual = getData(a).length;
  const expected = 10
  t.equal(actual, expected, "function should retutn 10 results");
  t.end();
});
test("test for getData function ", (t) => {
  a = {
    wordAutoComplete: 'a'
  };
  const actual = getData(a)[0][0];
  const expected = 'A';
  t.equal(actual, expected, "first element should have capital a");
  t.end();
});
test("test for boldLatter function ", (t) => {
  var ar1 = ['hand', 'head', 'heel'];
  var val = 'h';
  const actual = boldLatter(ar1, val);
  const expected = ['Hand', 'Head', 'Heel'];
  t.deepEqual(actual, expected, "function should retutn capitalized elements ");
  t.end();
});
