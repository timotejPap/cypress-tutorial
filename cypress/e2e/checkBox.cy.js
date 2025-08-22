describe("Checkbox interactions", () => {
  beforeEach("Visit the website", () => {
    cy.visit("/selenium/practice/check-box.php");
  });

  it("Check and uncheck a checkbox", () => {
    cy.get("#c_bs_1").check().should("be.checked"); // use .check() to select checkbox
    cy.get("#c_bs_2").uncheck().should("not.be.checked");
  });
});
