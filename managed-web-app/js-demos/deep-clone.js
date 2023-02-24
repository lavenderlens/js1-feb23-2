// 1. install rfdc dependency on command line
// > npm i rfdc

// 2. import rfdc module
const clone = require("rfdc")();
// note extra set of brackets

// example from ch3-4
const nestedObj = {
  a: 1,
  nums: [1, 2, 3],
};

// 3. use clone()
///////////////////////////////////////////
const nestedObjDeepCopy = clone(nestedObj);
///////////////////////////////////////////

nestedObjDeepCopy.nums.push(4); // mutate the copy

console.table(nestedObj); // original unchanged
// that's it!
// https://www.npmjs.com/package/rfdc
