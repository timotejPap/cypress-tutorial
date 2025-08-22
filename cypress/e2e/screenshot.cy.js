describe("Login test with valid credentials", () => {
  it("should log in with valid credentials", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login");
    cy.get("#username").click();
    cy.get("#username").type("student");
    cy.get("#password").click();
    cy.get("#password").type("Password123456");
    cy.get("#submit").click();
    cy.screenshot();
  });
});
