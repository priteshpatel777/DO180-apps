<<<<<<< HEAD
var createError = require('html-error');
=======
var createError = require('html-errors');
>>>>>>> f3284df08d63ca2f1eede261652be64a154bceec

var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World from pod: ' + process.env.HOSTNAME + '\n')
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

