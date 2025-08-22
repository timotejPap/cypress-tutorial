it.skip("Upload File Test", function () {
  cy.visit("https://trytestingthis.netlify.app/");
  cy.get("#myfile").attachFile("sample.txt");
});

it("Download File Test", function () {
  cy.downloadFile(
    "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg",
    "mydownloads",
    "example.jpg"
  );
});
