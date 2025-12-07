import Employee from "./Employee";

export default class PartimeEmployee extends Employee{

    constructor(salary: number){
        super(salary);
        this.name = "Part time Employee";
    }
}