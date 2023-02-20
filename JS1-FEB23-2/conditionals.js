/**
 * a conditional is a program flow structure
 * that takes aeither a single boolean value OR
 * a boolean expression
 * which if TRUE
 * excecutes the code in the immediately following block
 * or if FALSE
 * skips that block
 */

// 1. IF no branches
if (false) {
  console.log("IF branch executed");
}

// 2. IF ELSE
if (false) {
  console.log("IF branch executed");
} else {
  console.log("ELSE branch executed");
}

//3.3 or more branches
// 3. IF ELSE IF
if (false) {
  console.log("IF branch executed");
} else if (true) {
  console.log("SECOND IF branch executed");
} else {
  console.log("ELSE branch executed");
}

// switch statements test a single variable for equality
// they have case statements, and ig the variable matches the case
// that case gets executed
// if there's no match, a default case executes
// a bit like an ELSE
let variable = 99;
switch (variable) {
  case 1:
    console.log("You chose option 1");
    break;
  case 2:
    console.log("You chose option 2");
    break;
  case 3:
    console.log("You chose option 3");
    break;
  default:
    console.log("Choose a valid option 1-3");
} //end swich

// historically, switch was introduced without break statements
// switch without break is suited to additive logic
// and prevents duplication in the case statements

let mealOrder = 3;

switch (mealOrder) {
  case 3:
    console.log("drink");
  case 2:
    console.log("fries");
  case 1:
    console.log("burger");
  default:
    console.log("Thankyou for your order");
}

// 4. the ternary operator
// this is a conditional structure whose behaviour is like
// an EXCLUSIVE OR - no two parts can be both true at the same

/**
 * A        B       RESULT ||       RESULT^
 * T        T       T               F
 * T        F       T               T
 * F        T       T               T
 * F        F       F               F
 *
 * <condition> ? <value if true> : <value if false>
 *
 */

let loggedInComponent = "<p>Admin Component</p>";
let loggedOutComponent = "<p>Guest Component</p>";
let isLogegdIn = false;

let displayToUser = isLogegdIn ? loggedInComponent : loggedOutComponent;

console.log(displayToUser);
