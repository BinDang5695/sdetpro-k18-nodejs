import Employee from "./Employee";

export default class FTE extends Employee{

    constructor(salary: number){
        super(salary);
        this.name = "FTE";
    }

    public setBonus(maxBonus: number){
        this.bonus = maxBonus * (this.workingDays / (365 - 52));
    }
}