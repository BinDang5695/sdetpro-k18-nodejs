import AppiumDriver from "./AppiumDriver";
import DriverManager from "./DriverManager";

let driverManager = new DriverManager();
let appiumDriver: AppiumDriver = driverManager.getDriver("android");
appiumDriver.launch();
// Test other thing...
appiumDriver.closeConnection();