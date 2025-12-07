import Employee from "./Employee";

export default class PartimeEmployee extends Employee{

    constructor(salary: number, workingDays: number){
        super(salary, workingDays);
        this.name = "Part time Employee";
    }
}