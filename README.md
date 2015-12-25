# Simple Mailer for Mailgun

This is a simple module for sending emails
using Mailgun API.

## Installation 

```
$ npm install simple-mailer
```

## Usage

**Note:** You must have a valid [Mailgun](http://mailgun.com) account.

On `index.js`:

```
var simpleMailer = require('simple-mailer');

mailer.send({
  recipient: '[you]@[your_domain].com',
  subject: 'Test subject',
  message: 'Test message'  
}).then(function (data) {
  // Do something here
});
```

You must have a `config.js` file:

```
module.exports = {
 mailgun: 'https://api.mailgun.net/v3/[mailgun domain]/messages',
  sender: 'Sender <mailgun@[your mailgun domain]>',
  user: 'api',
  pass: '[your mailgun key]'
};
```
