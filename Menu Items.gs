function onOpen(e) {
  SpreadsheetApp.getUi().createMenu("[ Create P.O. Report ]")
  .addItem('[ 1 ] Save Receipts to Google Drive', 'saveEmailstoDrive')
  .addItem('[ 2 ] Upload .csv file', 'processStatementFolder')
  .addItem('[ 3 ] Download .pdf file', 'generatePdf')
  .addToUi();
}

function saveEmailstoDrive() {POReports.saveEmailstoDrive()}
function processStatementFolder() {POReports.processStatementFolder()}
function generatePdf() {POReports.generatePdf()}
