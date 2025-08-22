const path = require("path"); // Import the path module to handle file paths
const XLSX = require("xlsx"); // Import the XLSX library to read Excel files

function readExcel(filepath, sheetName) {
  // Construct the full path to the Excel file
  const absolutepath = path.resolve(filePath);
  const file = XLSX.readFile(absolutepath); // Read the Excel file
  const sheet = file.Sheets[sheetName]; // Get the specified sheet
  return XLSX.utils.sheet_to_json(sheet, { header: 1 }); // Convert the sheet to JSON format
}

module.exports = { readExcel }; // Export the function for use in other files
