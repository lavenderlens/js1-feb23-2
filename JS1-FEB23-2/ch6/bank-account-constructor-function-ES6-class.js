class Account {
  //1. remove function keyword and replace with class
  // 2. move function constructor params inside the class
  // 3. add the constructor keyword
  constructor(name, number, balance) {
    this.name = name;
    this.number = number;
    this.balance = balance;
  } //end constructor

  // 4. move prototype functions inside the class
  // 5. use class fields syntax for this
  deposit = (amount) => {
    // arrow functions do not have their own context of this
    // it defaults in this case to the class, the next level of scope up, which is ok
    this.balance += amount;
  };

  withdraw(amount) {
    // class fields syntax
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }
} //end class

var a1 = new Account("LAVENDER", 1001, 20.0);
var a2 = new Account("BAILEY", 1002, 500.0);
a1.deposit(100);
a2.deposit(100);

// a1.display = function(){
//                             console.log('Account name: ' + this.name
//                             + '\nnumber: ' + this.number
//                             + '\nbalance: £'
//                             + this.balance.toFixed(2));//balance accuracy
//                         };
// a1.display();
// a2.display();//Uncaught TypeError: a2.display is not a function

// you can MIX prototype methods and class
// this means you may EXTEND code beyond the original ES6 class
Account.prototype.displayAll = function () {
  console.log(
    "Account name: " +
      this.name +
      "\nnumber: " +
      this.number +
      "\nbalance: £" +
      this.balance.toFixed(2)
  ); //balance accuracy
};
a1.displayAll();
a2.displayAll(); // OK now - prototype has the function attached

console.table(a1);
console.table(a2);
