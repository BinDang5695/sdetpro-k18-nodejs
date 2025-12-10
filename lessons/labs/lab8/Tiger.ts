import Animal from "./Animal";
import {MAX_SPEED} from "./SpeedConstants";

export default class Tiger extends Animal{

    constructor(){
        super("Lulu", Math.floor(Math.random() * MAX_SPEED.tiger));

    }

}