var fs = require('fs');
var Email = require('./Email.js');

var StubEmail = function StubEmail (directory) {
  this.directory = directory;
};

StubEmail.prototype.Email = Email;

StubEmail.prototype.send = function (email, callback) {
  if (email instanceof Email) {
    email = Email.toObject();
  }
  email.date = email.date || Date.now();
  fs.writeFile(this.directory + '/' + email.to + '-' + email.date.toString(), email.text, callback);
};

module.exports.StubEmail = StubEmail;
