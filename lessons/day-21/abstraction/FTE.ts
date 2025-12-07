import Employee from "./Employee";

export default class FTE extends Employee{

    protected setBonus(): void {
        throw new Error("Method not implemented.")
    }

    public getSalary(): number {
        throw new Error("Method not implemented.")
    }

    public getBonus(): number {
        throw new Error("Method not implemented.")
    }
    

}