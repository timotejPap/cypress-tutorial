describe("Radio button interactions", () => {
  beforeEach("Visit the website", () => {
    cy.visit("https://qa-practice.netlify.app/radiobuttons");
  });

  it("Select and deselect a radio button", () => {
    cy.get("#radio-button1").check().should("be.checked"); // use .check() to select checkbox
    cy.get("#radio-button2").should("not.be.checked");
    cy.get("#radio-button3").should("not.be.checked");
  });
});
