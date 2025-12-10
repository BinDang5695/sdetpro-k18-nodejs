import Duck from "./Duck";
import FlyNoWay from "./FlyNoWay";
import Mute from "./Mute";

export default class Decoy extends Duck{

    constructor(){
        super(new Mute(), new FlyNoWay());
    }
}