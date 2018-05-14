var request = require('request');
var fs = require('fs');

var targetUrl = 'https://sytantris.github.io/http-examples/future.jpg';

request.get(targetUrl)
  .on('error', function(err) {
    if(err) {
      console.log('something went wrong');
    }
  }).on('response', function (response) {
    console.log('Downloading...')
    console.log('Response status message:', response.statusMessage, response.headers['content-type']);
  }).on('end', function () {
    console.log('Download Complete!')
  }).pipe(fs.createWriteStream('./future.jpg'));