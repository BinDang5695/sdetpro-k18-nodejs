import Employee from "./Employee";
const MAX_BONUS = 1000;

export default class FTE extends Employee{

    protected setBonus(): void {
        this.bonus = MAX_BONUS * (this.workingDays / (365 - 52));
    }

    public getSalary(): number {
        return this.salary;
    }

    public getBonus(): number {
        this.setBonus();
        return this.bonus;
    }
    
    

}