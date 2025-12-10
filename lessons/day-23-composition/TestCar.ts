import Car from "./Car";
import ElectricEngine from "./ElectricEngine";
import Engine from "./Engine";
import GasEngine from "./GasEngine";

let engine = new GasEngine();
let car = new Car(engine);
car.startCar();

// Logic change
car.changeEngine(new ElectricEngine);
car.startCar();