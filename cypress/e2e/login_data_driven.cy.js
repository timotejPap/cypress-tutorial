describe("Login test with excel data", () => {
  it("should login with valid credentials from Excel", () => {
    cy.task("readExcelData", {
      filePath: "cypress/fixtures/loginData.ods", // should be the xlsx file!!!
      sheetName: "Sheet1",
    }).then((data) => {
      cy.visit("https://parabank.parasoft.com/parabank/index.htm");
      data.forEach((user) => {
        cy.get("#username").type(user.Username);
        cy.get("#password").type(user.Password);
        cy.get("#submit").click();
      });
    });
  });
});
