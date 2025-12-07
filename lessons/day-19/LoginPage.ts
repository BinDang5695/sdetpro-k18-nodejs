export default class LoginPage{

    protected usernameSel: string = "";
    protected passwordSel: string = "";
    protected loginbtnSel: string = "";

    public inputUsername(username: string){
        console.log(`Input username for selector: ${this.usernameSel}`);
    }

    public inputPassword(password: string){
        console.log(`Input password for selector: ${this.passwordSel}`);
    }

    public clickOnButtonLogin(){
        console.log(`Input loginBtn for selector: ${this.loginbtnSel}`);
    }

}