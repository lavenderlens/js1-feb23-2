var myGlobal = "my global";

function changeGlobal() {
  myGlobal = myGlobal.toUpperCase();
}

changeGlobal();
console.log(myGlobal); //MY GLOBAL
myGlobal = null;
console.log(myGlobal); //null
// this function has a dependency
// if the dependency cahmnges outwith the function
// the function will not produce repeatable results
// it is not idempotent

function changeGlobalPure(characterSequence) {
  // pass in a copy
  return characterSequence.toUpperCase();
}
var myOtherGlobalVar = "other";
console.log(changeGlobalPure(myOtherGlobalVar)); //OTHER - works on a COPY
console.log(myOtherGlobalVar); //other - not changed

// words used: atomic, idempotent, pure -
// we are encouraged to write functions this way
// for testability, re-useability, scalability, maintainability - pretty much all the -ilities
