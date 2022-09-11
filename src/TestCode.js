function myFunction() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Testsht');
  var data = sheet.getDataRange().getValues();
  //var drImage = DriveApp.getFileById('1wLKHg7dpKMTFcedgalrUf_d0ZtEzwHyx');
  // var file = DriveApp.getFileById('1kXSzNPge5YhkZhVkoJ7itKvemgcao5oo'); // to attach a file
  var quotaLeft = MailApp.getRemainingDailyQuota()
  Logger.log(quotaLeft);

  for (var row = 0; row < data.length; ++row){
    GmailApp.sendEmail(data[row][5],
                    "请再次核实货好时间 "+data[row][3],
                    "Hello "+data[row][4]) //{
                    // image: [file.getAs(MimeType.PDF)],
                     // name: 'Automatic Emailer Script'
                    //}
  }

}
