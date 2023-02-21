/**
 * an object is a container or wrapper for -
 * related data and functions
 * usually, the functions transform some or all of the data in some way
 *
 * if an object had a function that had no relationship with its data
 * that function would be a candidte for another object
 * or, sometimes, what we call static context
 *
 * eg Car object would encapsulate all likely Car state
 * no. of wheels, doors, make, model, engine size, fuel type etc
 * with all likely Car behaviour
 * drive, park, refuel, test, etc
 *
 * if we had a method milesToKms(miles){ return miles / 0.6}
 * this would be a candidate for static context -
 * its the same for all car objects - more later
 *
 * we can make object literals in JS - key: value pairs in curly braces
 * we can also make them as classes - ES6 classes
 *
 * OR function constructors - pre-ES6 and all modern code compiled down to this
 */

// 1. object literal - person
const person = { name: "", age: 0 };
const alanLit = { name: "Alan Lavender", age: 56 };
const nilsLit = { firstname: "Nils", surname: "Lofgren", age: 69 };
const bruceLit = { firstname: "Bruce", lastname: "Springsteen" };

const bandOfLiterals = [alanLit, nilsLit, bruceLit];
for (let member of bandOfLiterals) {
  console.log(member.name);
  console.log(member.age);
}
for (let member of bandOfLiterals) {
  for (let prop in member) {
    console.log(prop);
  }
}
for (let member of bandOfLiterals) {
  console.log(Object.entries(member));
}

// there is no common ground in theses objects
// we SEE similarities - it makes sense to a human
// what we must do in code is to ENFORCE thos similarities
// in order to put objects of the same type in a collection together

// 1. Function constructor part 1 - function declaration
function Musician(name, age, ...instruments) {
  //3rd parm is Rest param -
  // packs 0, 1. or many args into an array
  this.name = name;
  this.age = age;
  this.instruments = [...instruments]; //spread syntax
  // UNpacks args from array

  // we COULD declare functions here
  // this.myfunction = function () {
  //     //TODO
  // }
  // but then the same function code
  // would be recreated every time we made an object
}
// 1. Function constructor part 2 - function invocation with new keyword
const alan = new Musician("Aln", 56, "kbds", "vox", "trombone");
const bruce = new Musician("Bruce", 73, "piano", "vox", "guitar", "harmonica");
const nils = new Musician("Nils", 56, "lead guitar", "backing vox");

const band = [alan, bruce, nils];
for (let member of band) {
  console.table(Object.values(member));
}

// is there anything you can see thsat may be missing from this?
// bear in mind that objects contain data and functions...

Musician.prototype.plays = function () {
  let played = "";
  for (let instrument of this.instruments) {
    played += instrument + ", ";
  }
  return `Musician ${this.name} plays ${played}`;
};

console.log(alan.plays());
console.log(bruce.plays());
console.log(nils.plays());
// EVERY object past, present and future will have access to this function
