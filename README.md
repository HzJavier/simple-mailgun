# Simple Mailgun for Mailgun

This is a simple module for sending emails
using Mailgun API.

## Installation 

```
$ npm install simple-mailgun
```

## Usage

**Note:** You must have a valid [Mailgun](http://mailgun.com) account.

```
var simpleMailgun = require('simple-mailgun')({
  domain: [your-domain-here],
  user: [your-user],
  key: [your-api-key] 
});

simpleMailgun.send({
  recipient: '[you]@[your_domain].com',
  subject: 'Test subject',
  message: 'Test message'  
}).then(function (data) {
  // Do something here
});
```
