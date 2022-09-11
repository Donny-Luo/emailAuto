function sendCRDEmails() {

  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Core_data").activate()

  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  //var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Core_data');
  var lr = ss.getLastRow();

  var templateText = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Daisybaby_核查CRD").getRange(1, 1).getValue();

  var ccAddress = ", southcn.oceanops@flexport.com"

  
  //var emailText = templateText.replace("{name}","AAA").replace("{title}","New titles");

  //Logger.log(templateText.replace("{name}", "AAA"));


  for (var i = 4; i<=lr;i++){
    var currentEmail = ss.getRange(i, 18).getValue()+ccAddress;
    var currentClassTitle = ss.getRange(i, 19).getValue();
    //var currentClassName = ss.getRange(i, 2).getValue();
    var flexID = ss.getRange(i, 1).getValue();
    var cargoReadDate = ss.getRange(i, 3).getDisplayValue();
    //var secCargoReadDate = ss.getRange(i, 3).getDisplayValue();
    var theShipper = ss.getRange(i, 4).getValue();
    var theConsignee = ss.getRange(i, 5).getValue();
    //var thePo = ss.getRange(i, 2).getDisplayValue();
    var theQty = ss.getRange(i, 17).getDisplayValue();

    var messageBody = templateText.replace("{flex_id}", flexID).replace("{shipper}", theShipper).replace("{Consignee}",theConsignee).   replace("{date}", cargoReadDate).replace("{eq_qty}", theQty);
    //Logger.log(messageBody)
    //var subjectLine = "Reminder: " + currentClassTitle + " Upcomming Class";
    MailApp.sendEmail(currentEmail, currentClassTitle, messageBody);
    
    //MailApp.sendEmail(currentEmail, "Reminder: " + currentClassTitle + " Upcoming Class", "Hello");

  }
  
}
