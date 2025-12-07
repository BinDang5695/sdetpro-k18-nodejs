import Employee from "./Employee";

export default class FTE extends Employee{

    constructor(salary: number, workingDays: number){
        super(salary, workingDays);
        this.name = "FTE";
    }

}