/*global require*/

var gcm = require('node-gcm');

var apiKey = '12345678976q4Gcveq3OeXuqG_0QwA_nbcHNjAU';

var registrationIds = [
  // 'DDD91bHsYkjy7Y339FUFOckszlKuGrgBu6lrDoThuc1WYt1RkoYCmoctWG9NIt2tED_eHeuW4L75Wgh2F3Euuymxo43wCGBroXNel4LNiCBx4_TNjC1n5BAWddYzjMXqT-R4LUBZ6OFSijSXXBecCfCQ9HSNz4dLuLMeHKJR6fpyJS-l0vRw2vQ'
];

var sendObj = {
  key1: 'value1',
  key2: 'value2'
};

// or with object values
var message = new gcm.Message({
  delayWhileIdle: true,
  timeToLive: 3,
  data: sendObj
});

var sender = new gcm.Sender(apiKey);

/**
 * Params: message-literal, registrationIds-array, No. of retries, callback-function
 **/
sender.send(message, registrationIds, 4, function(err, result) {
  console.log(result);
});
