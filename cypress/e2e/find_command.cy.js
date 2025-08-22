describe("Finding elements", () => {
  it("Finding element in Cypress", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.get("#headerPanel")
      .find(".leftmenu")
      .get("li")
      .contains("About Us")
      .click();
    cy.get(".title").should("have.text", "ParaSoft Demo Website");
  });
});
