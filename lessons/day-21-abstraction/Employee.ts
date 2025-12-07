export default abstract class Employee{

    protected name: string;
    protected salary: number;
    protected bonus: number = 0;
    protected workingDays: number;

    constructor(name: string, salary: number, workingDays: number){
        this.name = name;
        this.salary = salary;
        this.workingDays = workingDays;
    }

    protected abstract setBonus(): void;
    public abstract getSalary(): number;
    public abstract getBonus(): number;


}