function myFunction() {
  logger.log("Hello!");
  logger.log("Hello!");
  logger.log("Hello!");
}

function addToSideBar(){

  const htmlServ = HtmlService.createTemplateFromFile("my");
  const html = htmlServ.evaluate();

  const ui = SpreadsheetApp.getUi();
  ui.showSidebar(html);
  

}
