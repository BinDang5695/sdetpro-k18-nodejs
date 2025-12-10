export default abstract class BankAccount{

    protected balance: number = 0;
    protected minimumBalance: number = 0;

    protected abstract deposit(amount: number): void;
    protected abstract withDraw(amount: number): void;

    public getBalance(): number{
        return this.balance;
    }

    protected _withDraw(amount: number, errMsg: string){
        let temBalance = this.balance - amount;
        if(temBalance < this.minimumBalance){
            throw new Error(errMsg);            
        }
        this.balance -= this.balance - amount;
        console.log(`[SUCCESS] Withdrawing ${amount}`);
    }


}