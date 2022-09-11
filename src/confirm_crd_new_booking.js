function new_bk() {

  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("New_Booking_confirm_crd").activate()

  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  //var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('New_Booking');
  var lr = ss.getLastRow();

  //var drImage = DriveApp.getFileById('1p-KOO69zhVmaAFDAz6fX48xfsZM8w4PsNlSS290bWd0');
  //var fileDf = DriveApp.getFileById('1p-KOO69zhVmaAFDAz6fX48xfsZM8w4PsNlSS290bWd0'); // to attach a file

  //var templateText = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Daisybaby_核查CRD").getRange(1, 1).getValue();

  var ccAddress = ", southcn.oceanops@flexport.com";

  const htmlTemplate = HtmlService.createTemplateFromFile("confirm_new_booking");
  const htmlForEmail = htmlTemplate.evaluate().getContent();




  for (var i = 4; i<=lr;i++){
    var currentEmail = ss.getRange(i, 5).getValue();
    var currentClassTitle = ss.getRange(i, 6).getValue();

    GmailApp.createDraft(currentEmail+ccAddress, currentClassTitle, "HTML_TEXT",
    { htmlBody: htmlForEmail}
    );

  }

}


