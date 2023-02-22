const Account = function (name, number, balance) {
	this.name = name;
	this.number = number;
	this.balance = balance;
};
Account.prototype.deposit = amount => {
	this.balance += amount;
};
Account.prototype.withdraw = amount => {
	if (amount <= this.balance) {
		this.balance -= amount;
	}
};
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
