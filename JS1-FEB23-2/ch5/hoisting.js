/**
 * it is possible, using the var keyword only, to:
 * 1. call a function (that hasn't been written yet)
 * 2. use variable values where the variables haven't been declared yet
 * 3. Only then define the function and declare the variables
 * HOISTING ONLY TAKES PLACE USING VAR
 */

// actual interpreter order:
console.log(goodMorning()); //3 - runtime code

function goodMorning() {
  //1 - declaration
  a = "Goood "; //2 - expression
  b = " Moooorning!"; //2 - expression
  return a + b; //2 - expression
}
var a, b; //1 - declaration
// let a, b; // ReferenceError: Cannot access 'a' before initialization, and more...

// our understanding that function declarations AND variable
// declarations are loaded into memory at the start fuels out understanding of this code//
