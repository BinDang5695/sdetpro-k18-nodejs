
// user-defined data
// Focus into properties: salary

export default class Employee {
    
    protected salary: number;
    protected name: string = 'Employee';

    constructor(salary: number) {
        this.salary = salary;
    }

    public getSalary() {
        return this.salary;
    }

    public getName() {
        return this.name;
    }

}
