import CheckingAccount from "./CheckingAccount";
import SavingAccount from "./SavingAccount";


let savingAccount = new SavingAccount();
let checkingAccount = new CheckingAccount();

// Deposit
savingAccount.deposit(100);
checkingAccount.deposit(100);

// Get balance
console.log(`Saving account balance: ${savingAccount.getBalance()}`);
console.log(`Checking account balance: ${checkingAccount.getBalance()}`);

// Withdraw positive case
savingAccount.withDraw(100);
checkingAccount.withDraw(50);

// Withdraw negative case
checkingAccount.deposit(1);
checkingAccount.withDraw(1);

