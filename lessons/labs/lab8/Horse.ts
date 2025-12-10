import Animal from "./Animal";
import {MAX_SPEED} from "./SpeedConstants";

export default class Horse extends Animal{

    constructor(){
        super("Lulu", Math.floor(Math.random() * MAX_SPEED.horse));

    }

}