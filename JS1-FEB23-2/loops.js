/**
 * a loop is a block of code entered into by a conditional expression
 * but in this case, the code in the block is repeated
 * UNTIL either a counter runs out
 * the end of something is reachde
 * OR the user inputs something to indicate they wish the loop to end
 * counters are not used as much as collections
 */

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

console.log(jsClass.length); //9

// 1. conventional FOR loop
for (let i = 0; i < jsClass.length; i++) {
  console.log(jsClass[i]);
}

var x = 1; //1
x = x + 1; //2
x += 1; //3
// x++; // value of x is 4
console.log(x++); //3 postfix increment
console.log(x); //4

var y = 1; //1
y = y + 1; //2
y += 1; //3
// ++y; // value of y is 4
console.log(++y); //4 prefix increment
console.log(y); //4

// 2. FOR OF loop
// doesn't deal with index positions
for (let member of jsClass) {
  console.log(member);
}

// 2A. FOR IN loop (should only be used with objects)
// doesn't deal with index positions
for (let idx in jsClass) {
  //   console.log(idx);
  console.log(jsClass[idx]);
}

// 1A-1B break and continue with for loop
console.log("For using BREAK");
for (let i = 0; i < jsClass.length; i++) {
  if (jsClass[i] === "Reece") {
    break;
  }
  console.log(jsClass[i]);
}
// 1A-1B break and continue with for loop
console.log("For using CONTINUE");
for (let i = 0; i < jsClass.length; i++) {
  if (jsClass[i] === "Jim") {
    continue;
  }
  console.log(jsClass[i]);
}

// 3. WHILE loop
// useful in cases where it's not just a counter that breaks out of the loop
console.log("Using WHILE");
let i = 0;
while (i < jsClass.length) {
  console.log(jsClass[i]);
  i++; //very important!
}

// 3A DO-WHILE
// executes loop code at least once
// useful where code must run at least once eg
// rendering a menu on the page
console.log("Using DO-WHILE");
let counter = 99;
do {
  console.log(counter + 1);
  counter++; //very important!
} while (counter < 10);
