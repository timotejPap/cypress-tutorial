describe("Login test", () => {
  beforeEach("Visit the website", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  });

  it("Test login into account", () => {
    cy.get('[name="username"]').type("student");
    cy.get('[name="password"]').type("Password123");
    cy.get('[value="Log In"]').click();
    cy.get("#leftPanel").find(".smallText").should("contain.text", "Welcome");
  });
});
