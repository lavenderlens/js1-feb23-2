/**
 * Coercion is the changing of values
 * from one datatype to another
 * this may happen explicitly
 * at the coder's behest
 * or implicitly in the language
 */

let yearNumber = 1995;
console.log(typeof yearNumber); //number
console.log(yearNumber + 1); //do math
console.log(yearNumber - 1); //do math

let yearString = "1995";
console.log(typeof yearString); //string
console.log(yearString + 1); //"19951"
// coercion of second operand: number to string
// plus operator works for numbers and strings
console.log(yearString - 1); //1994
// coercion of first operand to number
// minus operator works only for number
