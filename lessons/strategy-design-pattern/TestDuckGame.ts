import Decoy from "./BabyDuck";
import Duck from "./Duck";
import BabyDuck from "./BabyDuck";
import MallardDuck from "./MallardDuck";
import DuckController from "./DuckController";
import FlyWithWings from "./FlyWithWings";
import Quack from "./Quack";

// Init data from user-defined classes - OOP
let decoy: Duck = new Decoy();
let babyDuck: Duck = new BabyDuck();
let mallardDuck: Duck = new MallardDuck();

// Init controller - FP
let duckController = new DuckController();


// Use the controller to process data
duckController.performQuack(decoy);

// Baby duck eats food and becomes a mallard duck
babyDuck.setQuackBehaviour(new Quack());
babyDuck.setFlyBehaviour(new FlyWithWings());
duckController.performQuack(babyDuck);
duckController.performQuack(mallardDuck);
