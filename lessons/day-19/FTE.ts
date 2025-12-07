import Employee from "./Employee";

export default class FTE extends Employee{

    constructor(salary: number){
        super(salary);
        this.name = "FTE";
    }
}