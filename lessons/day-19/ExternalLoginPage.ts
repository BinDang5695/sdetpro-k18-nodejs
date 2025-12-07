import LoginPage from "./LoginPage";

export default class ExternalLoginPage extends LoginPage{

    constructor(){
        super();
        this.usernameSel = "#ext-username";
        this.passwordSel = "#ext-password";
        this.loginbtnSel = "#ext-loginbtn"; 
    }


}