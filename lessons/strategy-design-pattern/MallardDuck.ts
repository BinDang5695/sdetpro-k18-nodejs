import Duck from "./Duck";
import FlyWithWings from "./FlyWithWings";
import Quack from "./Quack";

export default class MallardDuck extends Duck{

    constructor(){
        super(new Quack(), new FlyWithWings());
    }
}