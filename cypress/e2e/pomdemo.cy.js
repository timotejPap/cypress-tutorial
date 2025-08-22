import { LoginPage } from "./pages/loginPOMDemo.cy.js";

const loginPage = new LoginPage();

describe("All login tests", function () {
  beforeEach(function () {
    cy.visit("https://opensource-demo.orangehrmlive.com");
  });

  it("Valid login", function () {
    loginPage.enterUsername("Admin");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
    cy.get(".oxd-userdropdown-name").click();
  });

  it("Invalid username", function () {
    loginPage.enterUsername("AdminInvalid");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
    cy.get(".oxd-userdropdown-name").click();
  });
});

it("Invalid password", function () {
  loginPage.enterUsername("AdminInvalid");
  loginPage.enterPassword("admin123");
  loginPage.clickLogin();
  cy.get(".oxd-userdropdown-name").click();
});
