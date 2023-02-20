/**
 *
 * equality in JS:
 * there are THREE types of equality
 * === or "strict" equality
 * == or 'loose' equality
 * Object.is() for edge cases NaN and +/-0
 */

console.log(3 == "3"); // true
console.log(3 === "3"); // false

/**
 * people say that == compares values
 * and === compares values and types
 * this is not accurate
 * what actually goes on is that
 * ALL comparisons (apart from Object.is()) are ===
 * == ALLOWS for the coercion of one or moare sides
 * BEFORE a strict === check is performed
 */

function multiplyTwoNumbers(num1, num2) {
  return num1 * num2;
}

console.log(multiplyTwoNumbers(2, 2));
console.log(multiplyTwoNumbers(2, "2"));
console.log(multiplyTwoNumbers(2, "TWO")); //NaN
// NaN is a value returned
// where a number was expected
// and none provided

console.log(NaN === NaN); //false
console.log(NaN == NaN); //false

console.log(Object.is(NaN, NaN)); //true

console.log(+0 === -0); // true
console.log(Object.is(+0, -0)); // false

/**
 * COPYING IN JS
 *
 */

const nestedObj = {
  a: 1,
  nums: [1, 2, 3],
};
console.log("Nested object copying:");
console.log("By reference:");
const nestedObj2 = nestedObj;
nestedObj2.nums.push(4); //cahnged
console.log("Original affected");
nestedObj2.a = 2; //changed
console.table(nestedObj);

console.log("By spread operator:");
// spread breaks the dependency on old object state at the top level
// BUT further references still "carry over" to the new object reference
// it is possible to fix this by recursion
// but it's not pretty
const nestedObj3 = { ...nestedObj, nums: [...nestedObj.nums] };
// DEEP copying (breaking all our original object references)
// is non-trivial. More later...
// const nestedObj3 = { ...nestedObj };
nestedObj3.nums.push(5); //works
console.log("Original affected");
nestedObj3.a = 3; //didn't work
console.table(nestedObj);
