describe("Registration", () => {
  beforeEach("Visit the website", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  });

  it("Registration automate", () => {
    cy.contains("a", "Register").click();
    cy.get("#customer\\.firstName").type("Peter");
    cy.get("#customer\\.lastName").type("Parker");
    cy.get("#customer\\.address\\.street").type("123 Main St");
    cy.get("#customer\\.address\\.city").type("Anytown");
    cy.get("#customer\\.address\\.state").type("CA");
    cy.get("#customer\\.address\\.zipCode").type("12345");
    cy.get("#customer\\.phoneNumber").type("1234567890");
    cy.get("#customer\\.ssn").type("123-45-6789");
    cy.get("#customer\\.username").type("johndoe");
    cy.get("#customer\\.password").type("Password123");
    cy.get("#repeatedPassword").type("Password123456");
    cy.get(".button").contains("Register").click();
  });
});

// running in terminal for reports
// npx cypress run --spec 'cypress/e2e/registration.cy.js' --browser chrome
