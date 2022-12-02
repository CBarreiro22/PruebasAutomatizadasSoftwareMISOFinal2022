class Login {
    constructor(msg) {
        this.msg = msg;
        
        this.txtEmail = '.gh-input-icon.gh-icon-mail';
        this.txtPassword = '.password.ember-text-field.gh-input.ember-view';
        this.btnLogin = '//*[@id="ember8"]';
        this.msgError = ".main-error";
    }

}
module.exports = {
    Login,
};