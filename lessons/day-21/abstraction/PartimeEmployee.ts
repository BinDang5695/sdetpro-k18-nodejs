import Employee from "./Employee";

export class PartimeEmployee extends Employee{

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