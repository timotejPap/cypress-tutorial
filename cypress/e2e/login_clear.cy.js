describe("Visit website and perform actions", () => {
  beforeEach("Visit the website", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  });

  it("Test login into account", () => {
    cy.get('[name="username"]').type("testUser").clear();
    cy.get('[name="password"]').type("testPassword").clear();
  });
});
