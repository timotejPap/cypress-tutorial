describe("Visit website and perform actions", () => {
  beforeEach("Visit the website", () => {
    cy.visit("https://practice.expandtesting.com/dropdown");
  });

  it("Testing dropdown", () => {
    cy.get("#dropdown").should("be.visible").eq("0");
  });
});
