var request = require('request');
var Q = require('q');
var GLOBALS = require('./config');

var mailer = {};

mailer.send = function (config) {
  var deferred = Q.defer();

  request.post(GLOBALS.mailgun, {
    'auth': {
      'user': GLOBALS.user,
      'pass': GLOBALS.pass 
    },
    form: {
      'from': GLOBALS.sender,
      'to': config.recipient,
      'subject': config.subject,
      'text': config.message 
    }
  }, function (err, httpResponse, body) {
    if (err) { deferred.reject(err); };

    deferred.resolve(httpResponse);
  });

  return deferred.promise;
};

module.exports = mailer;
