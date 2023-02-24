var myGlobal = "a global var";

function decorateVariable() {
  console.log("This is my variable: ");
  console.log(myGlobal);
  console.log("Goodbye");
}

decorateVariable();
decorateVariable();

myGlobal = "a different global var";
decorateVariable();

// myGlobal is a dependency and may change
// outwith repeated calls of decorateVariable()

function decorateVariablePure(variable) {
  console.log("This is my variable: ");
  console.log(variable);
  console.log("Goodbye");
}

decorateVariablePure("some value");
decorateVariablePure("some value");
decorateVariablePure("some value");
