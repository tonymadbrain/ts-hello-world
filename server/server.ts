import express = require('express');
var os = require('os');

// Create a new express app instance
const app: express.Application = express();

app.get('/' , function (req, res) {
  res.send('Hoooray! I am "' + os.hostname() + '".');
});

app.listen(3000, function () {
  console.log('app is listening on port 3000!');
});