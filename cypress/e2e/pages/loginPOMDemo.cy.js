export class LoginPage {
  // variables for object locators
  username_field = '[name="username"]';
  password_field = '[name="password"]';
  login_button = '[type="Submit"]';
  ensurePage = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";

  // Method to enter the username
  enterUsername(username) {
    cy.get(this.username_field).type(username);
  }

  // Method to enter the password
  enterPassword(password) {
    cy.get(this.password_field).type(password);
  }

  // Method to click the login button
  clickLogin() {
    cy.get(this.login_button).click();
  }

  // Method to verify the page is loaded
  // ensurePageLoaded(){
  //     cy.get(this.ensurePage).should("have.text", "Dashboard")
  // }
}
