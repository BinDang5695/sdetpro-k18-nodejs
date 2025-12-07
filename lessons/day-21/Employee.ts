
// user-defined data
// Focus into properties: salary

export default class Employee {
    
    protected salary: number;
    protected name: string = 'Employee';
    protected bonus: number;
    protected workingDays;

    constructor(salary: number, workingDays: number) {
        this.salary = salary;
        this.bonus = 0;
        this.workingDays = workingDays;
    }

    public getSalary() {
        return this.salary;
    }

    public getName() {
        return this.name;
    }

    public getBonus() {
        return this.bonus;
    }

    protected setBonus(bonus: number){
        this.bonus = bonus;
    }

    public setWorkingDays(workingDays: number) {
        this.workingDays = workingDays;
    }

    public getWorkingDays() {
        return this.workingDays;
    }
    
}
