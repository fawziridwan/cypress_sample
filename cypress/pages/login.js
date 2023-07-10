class LoginPageObject {
    elements = {
        username: () => cy.get("#username"),
        password: () => cy.get("#password"),
        loginBtn: () => cy.get("#login_button"),
        errorFindUsername: () => cy.contains(`We couldn't find your username.`),
        errorChallengeAttemp: () => cy.contains(`You have 9 remaining login attempts.`),
      };

      typeUsername(username)    {
        this.elements.username().type(username);
    }
    
    typePassword(password)    {
        this.elements.password().type(password);
    }
    
    clickLogin()  {
        this.elements.loginBtn().click();
    }
    
    submitLogin(username, password) {
        this.elements.username().type(username);
        this.elements.password().type(password);
        this.elements.loginBtn().click();
      }
}

export const loginPageObject = new LoginPageObject();