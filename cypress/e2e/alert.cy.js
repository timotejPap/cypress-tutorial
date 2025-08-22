describe("Alert handling", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
  });
  it("JS alert", () => {
    cy.get('button[onclick="jsAlert()"]').click();
    cy.on("window:alert", (alert) => {
      expect(alert).to.equal("I am a JS Alert");
    });
  });

  it.only("JS Confirm alert", () => {
    cy.get('button[onclick="jsConfirm()"]').click();
    cy.on("window:confirm", (confirm) => {
      expect(confirm).to.equal("I am a JS Confirm");
      return false; // true - Accept the alert, false - Dismiss the alert
    });
  });
});
