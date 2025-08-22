const { defineConfig } = require("cypress");
const { readExcel } = require("./cypress/support/readExcel.js");
const { read } = require("fs");

module.exports = defineConfig({
  e2e: {
    video: true,
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    baseUrl: "https://www.tutorialspoint.com",
    // watchForFileChanges: false, // disable file watching
    setupNodeEvents(on, config) {
      on("task", {
        readExcelData({ filePath, sheetName }) {
          return readExcel(filePath, sheetName); // Call the readExcel function
        },
      });
      return config; // Return the config object

      // const { defineConfig } = require("cypress");
      // const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

      // module.exports = defineConfig({
      //   // setupNodeEvents can be defined in either
      //   // the e2e or component configuration
      //   e2e: {
      //     setupNodeEvents(on, config) {
      //       on("task", { downloadFile });
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: false,
    },
  },
});

//     },
//   },
// });
