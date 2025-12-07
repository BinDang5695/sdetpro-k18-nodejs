import InternalLoginPage from "./InternalLoginPage";
import ExternalLoginPage from "./ExternalLoginPage";
import LoginTestFlow from "./LoginTestFlow";

let internalLoginPage = new InternalLoginPage();
let externalLoginPage = new ExternalLoginPage();

let loginTestFlow = new LoginTestFlow();

// Test Internal
loginTestFlow.login("bindz", "123456", internalLoginPage);

// Test External
loginTestFlow.login("teocodon", "654321", externalLoginPage);
