const jsClass = [
  "Bozena",
  "Corina",
  "Jim",
  "Madhavi",
  "Reece",
  "Sorin",
  "Swathi",
  "Sunga",
  "Vini",
];
console.log(jsClass);

/**
 * functional array methods return a COPY of the original array
 * with transformations made
 * MAP
 * performs a function on EVERY element
 * FILTER
 * returns ONLY those elements that pass a test (predicate)
 * you can chain multiple calls to these methods together
 * BUT it makes sense to filter first for large datasets
 * REDUCE
 * returns, traditionally but not necessarily, a single flattened value
 * this is worked out by comparing the previous value with the current
 * (passing in a comparator function)
 * beyond scope of this course, you can pass a 2nd arg to reduce
 * called a dependency array
 * this keeps the array structure alive and does not flatten
 * pattern widely used in React (useEffect hook)
 * the dependency array is just vanilla JS
 *
 * reduce when flattening is the last method in the chain
 * reduce when passing a dependency array may be followed by more map and filter operations
 */
const shortNamesUpperCased = jsClass
  .filter((el) => el.length < 6)
  .map((el) => el.toUpperCase())
  .reduce((prev, curr) => prev + " * " + curr);

console.log(shortNamesUpperCased);
// the original array is unaffected
console.log(jsClass);
