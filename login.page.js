const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
   // get inputUsername () { return $('#username') }
    //get inputPassword () { return $('#password') }
    get btnSubmit () { return $('//a[contains(text(),"Sign in")]') }
    get emailinput () { return $('#email_create')}
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    async login () {
     //   await this.inputUsername.setValue(username);
      //  await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await this.emailinput.setValue("taoadni@gmail.com");
        console.log($("'#email_create").getText())+"THis is my output from UI"
        
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
