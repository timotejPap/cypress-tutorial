describe("Visit website and perform actions", () => {

  it("Double click", () => {
    cy.visit("https://qa-practice.netlify.app/double-click");
    cy.get("#double-click-btn").dblclick();
    cy.get("#double-click-result").should("contain.text", "Congrats, you double clicked!");
  });
});
