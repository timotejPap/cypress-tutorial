describe("Uploading file", () => {

  it("Upload a single file", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").selectFile("cypress\\screenshots\\Login test with valid credentials -- should log in with valid credentials.png");
    cy.get("#file-submit").click();
    cy.get("h3").should("contain.text", "File Uploaded!");
  });
});
