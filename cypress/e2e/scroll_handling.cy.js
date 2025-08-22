describe("Scrolling in Cypress", () => {

  it("Scroll handling in Cypress", () => {
    cy.visit("https://parabank.parasoft.com/parabank/admin.htm");
    // cy.scrollTo("bottom"); // Scroll to the bottom of the page
    cy.scrollTo(0,300); // Scroll to a specific position
    cy.wait(2000); // Wait for 2 seconds to observe the scroll
    cy.scrollTo("top"); // Scroll back to the top of the page
  });
});
