/**
 * functions - exceute one or more lines of code at once
 * with one name, or anonymously
 * they have:
 * INPUT
 * OUTPUT
 * OR BOTH
 * OR NEITHER
 * similar in other languages (Java: methods)
 * JS important features:
 * JS can pass functions as data (first-order objects)
 * JS can return another function as data
 *
 */

console.log("Hello");
console.log("World");
console.log("How are you today?");

// ESSENTIAL FUNCTIONS
// 1. Function Declaration
// uses function keyword
// loaded into memory at the start
// i. no input, no output
function greet1() {
  console.log("Hello");
  console.log("World");
  console.log("How are you today?");
}
greet1();

// ii. input, no output
function greet2(name) {
  //parametised variable (syntax)
  console.log("Hello");
  console.log(name);
  console.log("How are you today?");
}
greet2("Alan"); //argument (data)
// notice neith of these functions persist the result
var alan = greet2("Alan");
console.log(alan); //undefined

// iii. input, and output
function greet3(name) {
  return "Hello\n" + name + "\nHow are you today";
}
greet3("Vini"); //argument (data) // gives no visible result
console.log(greet3("Vini")); //PASSES RESULT ON // VISIBLE NOW // output (greet3) as input (console.log())
// the return statement persists the result
var vini = greet3("Vini");
console.log(vini); //undefined

// EXTRA FUNCTIONS

// enhancements for function declarations and indeed any function

// type checking
function greet3Checked(name) {
  if (typeof name !== "string") {
    return null;
  }
  return "Hello\n" + name + "\nHow are you today";
}
console.log(greet3Checked("Corina"));
console.log(greet3Checked(123));
console.log(greet3Checked({}));

// default parameters
function greet3DefParams(name = "trainee") {
  return "Hello\n" + name + "\nHow are you today";
}
console.log(greet3DefParams());

// rest parameters
// rest is the opposite of spread (see copying ch3-4)
// instead of UNpacking single values from an array
// rest packs 0, 1, or multiple values INTO an array
function greet3RestParams(...names) {
  //REST PARAMS IN FUNCTION DECLARATIO
  var list = "";
  for (let el of names) {
    list += el + ", ";
  }
  return list + " How are y'all today";
}
console.log(greet3RestParams()); // blank output
console.log(greet3RestParams("Bozena")); // 1 arg
console.log(greet3RestParams("Bozena", "Jim", "Reece")); // 1 arg

// destructuring assigments (arrays only for now)
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
// if we want individual variables form this list we could do this...
// const trainee1 = jsClass[0];
// const trainee2 = jsClass[1];
// const trainee3 = jsClass[2];//and so on OR

// we could use destructuring
const [trainee1, trainee2, trainee3, ...others] = jsClass; //SPREAD SYNTAX IN DESTRUCTURING
console.log(trainee1);
console.log(trainee2);
console.log(trainee3);
console.log(others);

// 2. Function Expression (Anonymous Function Expression)
// is loaded into memory where it occurs and NOT beforehand
// see especially objects chapter
// console.log(greetExpression("Madhavi"));//ReferenceError: Cannot access 'greetExpression' before initialization

const greetExpression = function (name) {
  return "Hello\n" + name + "\nHow are you today";
};
console.log(greetExpression("Madhavi"));

// 3. Immediately Invoked Function Expression (IIFE)

const greetIIFE = (function (name) {
  // runs immediately where declared
  return "Hello\n" + name + "\nHow are you today";
})("Swathi");
console.log(greetIIFE); // note NO invocating brackets here

// @getify Kyle Simpson "YDKJS - You Don't Know JS" book series
// all past editions available for FREE on @getify Git
// refers to this synta in particular the last extra pair of brackets
// ..

// 4. ARROW FUNCTIONS (at first resemble Java lambdas but much wider execution context
// =>

// take an anonymous function expression
const greetArrow = function (name) {
  return "Hello\n" + name + "\nHow are you today";
};

// stage 1 - remove function keyword and put arrow after params
const greetArrow1 = (name) => {
  return "Hello\n" + name + "\nHow are you today";
};

// stage 2 - remove return keyword (if only on estatement in function body)
// and remove curly braces
// if you remove one, you must remove the other
const greetArrow2 = (name) => "Hello\n" + name + "\nHow are you today";

// stage 3 (optionally) - if one arg, remove round param brackets
const greetArrow3 = (name) => "Hello\n" + name + "\nHow are you today";
