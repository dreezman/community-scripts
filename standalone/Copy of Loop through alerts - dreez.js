// This script loops through all of the alerts - change it to do whatever you want to do :)
//
// This is a standalone script which you can run from the Script Console

extAlert = control
  .getExtensionLoader()
  .getExtension(org.zaproxy.zap.extension.alert.ExtensionAlert.NAME);

var AlertCnt = 0;


if (extAlert != null) {
  AlertCnt = 0;
  var Alert = org.parosproxy.paros.core.scanner.Alert;
  var alerts = extAlert.getAllAlerts();
  var loop = [];

  for (var i = 0; i < alerts.length; i++) {
    var alert = alerts[i];
    print("alert #: " + i);
    loop.push({
      AlertCount: i + 1,
      AlertURL: alert.uri,
      Name: alert.name,
      Risk: Alert.MSG_RISK[alert.risk],
      Confidence: Alert.MSG_CONFIDENCE[alert.confidence],
      AlertID: alert.getAlertId(),
      AlertRef: alert.getAlertRef(),
      Attack: alert.getAttack(),
      cwe: alert.getCweId(),
      Dascription: alert.getDescription().slice(0, 400),
      InputVactor: alert.getInputVector(),
      Message: alert.getMessage(),
      Method: alert.getMethod(),
      Reference: alert.getReference(),
      Solution: alert.getSolution(),
      WascId: alert.getWascId(),
    });
    x = JSON.stringify(loop[i]);
    print(x);
  }

  // For more alert properties see https://static.javadoc.io/org.zaproxy/zap/latest/org/parosproxy/paros/core/scanner/Alert.html
}
