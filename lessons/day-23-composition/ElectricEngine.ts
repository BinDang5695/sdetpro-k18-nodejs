import Engine from "./Engine";

export default class ElectricEngine extends Engine{

    public startEngine(): void {
        console.log(`Start Electric Engine`);
    }

    public stopEngine(): void {
        console.log(`Stop Electric Engine`);
    }


}