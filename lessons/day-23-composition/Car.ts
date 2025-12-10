import Engine from "./Engine";

export default class Car{

    private engine: Engine;

    constructor(engine: Engine){
        this.engine = engine;
    }

    public startCar(): void{
        console.log("Turning on safety alert dialog...");
        this.engine.startEngine();
    }

    public changeEngine(engine: Engine){
        this.engine = engine;
    }

}