import BankAccount from "./BankAccount";

export default class SavingAccount extends BankAccount{

    deposit(amount: number): void {
        this.balance += amount;
    }

    withDraw(amount: number): void {
        const errMsg = `Insufficient balance!`;
        this._withDraw(amount, errMsg);   
    }

}