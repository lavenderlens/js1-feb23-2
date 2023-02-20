/**
 * A variable is a reserved marker in memory
 * that represents values and / or expressions
 */

// keyword var permits re-declaration, and re-assignment
var width; // declaration, reserves memory
// no initial value given,
// but variables declared like this will hav a special value in JS
console.log(width); //undefined

// assignment
width = 42.5;
console.log(width);
console.log(typeof width); //number

width = true; //re-assignment to different datatypes may take place
console.log(typeof width); //boolean

width = 42.5;
console.log(width);
console.log(typeof width); //number

// when re-declared using var, a variable remembers its previous value
var width;
console.log(width);

// let allows re-assignment but NOT re-declaration
let height;
console.log(height);
height = 20.2;
console.log(height);
console.log(typeof height);

// let height;//SyntaxError: Identifier 'height' has already been declared

// const cannot be declared without initialising - no undefineds
// may not be re-assigned at the top level

// const depth;//SyntaxError: Missing initializer in const declaration
const depth = 600;
console.log(depth);
// depth = 500;//TypeError: Assignment to constant variable.

const dimensions = {
  width: 42.5,
  height: 20.2,
  depth: 600,
};
dimensions.depth = 500; //works
// dimensions = "42.5 x 202.3 x 600";//TypeError: Assignment to constant variable.

console.log(dimensions.depth);
console.table(dimensions);
