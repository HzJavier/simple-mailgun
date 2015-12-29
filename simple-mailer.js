var request = require('request');
var Q = require('q');

module.exports = mailer;
function mailer (GLOBALS) {
  GLOBALS = GLOBALS || {user: 'api'};

  this.send = function (config) {
    var deferred = Q.defer();

    request.post('https://api.mailgun.net/v3/' + GLOBALS.domain + '.mailgun.org/messages', {
      'auth': {
        'user': GLOBALS.user,
        'pass': GLOBALS.key
      },
      form: {
        'from': config.sender + '<mailgun@' + GLOBALS.domain + '.mailgun.org>',
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

  return {
    send: send
  };
}
