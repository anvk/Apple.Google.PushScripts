/*global require*/

var apn = require('apn');

var options = {
  pfx: '../certs/myCertificate.p12',
  passphrase: 'some_password',
  production: false
};

var devices = [
  // 'b5dae108d242fac1135c581593b48708e58076787fa51110f74d74eb13e69649'
];

var sendObj = {
  key1: 'value1',
  key2: 'value2'
};

var apnConnection = new apn.Connection(options);

var note = new apn.Notification();
note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
note.badge = 1;
note.sound = "ping.aiff";
note.alert = "\uD83D\uDCE7 \u2709 Hello from Node";
note.payload = sendObj;

devices.forEach(function(deviceid) {
  var myDevice = new apn.Device(deviceid);
  apnConnection.pushNotification(note, myDevice);
});