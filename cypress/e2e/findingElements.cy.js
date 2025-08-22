describe("Finding elements", () => {
  it("Finding element in Cypress", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.get(".home").click();
    cy.get(".more").eq(0).contains("Read More").click();
    // cy.get("a").eq(1).contains("Read More").click();
    cy.get(".contact").eq(0).contains("contact").click();
    cy.get(".title").should("have.text", "Customer Care");
  });
});
