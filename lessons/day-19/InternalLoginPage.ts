import LoginPage from "./LoginPage";

export default class InternalLoginPage extends LoginPage{

    constructor(){
        super();
        this.usernameSel = "#username";
        this.passwordSel = "#password";
        this.loginbtnSel = "#loginbtn";
    }


}