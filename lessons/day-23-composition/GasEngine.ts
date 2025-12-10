import Engine from "./Engine";

export default class GasEngine extends Engine{

    public startEngine(): void {
        console.log(`Start Gas Engine`);
    }

    public stopEngine(): void {
        console.log(`Stop Gas Engine`);
    }


}