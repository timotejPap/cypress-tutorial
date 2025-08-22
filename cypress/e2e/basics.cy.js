describe("Visit website and perform actions", () => {
  beforeEach("Visit the website", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  });

  afterEach("Log result", () => {
    cy.log("Test completed");
  });

  it("Should visit the website and perform actions", () => {
    cy.get(".logo").should("be.visible");
    cy.get(".caption").should("have.text", "Experience the difference");
  });

  it("Click by text", () => {
    cy.contains("Admin Page").click();
    cy.get("a").contains("Admin Page").should("be.visible").click();
  });

  it("Enter name and password", () => {
    cy.get('[name="username"]').type("Username");
    cy.get('[name="password"]').type("Password1234");
    cy.get(".button").contains("Log In").click();
  });
});
