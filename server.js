var express = require('express');
var app = express();
var port = 6767;

app.use(express.static('docs'));

app.listen(port, function () {
  console.log('dev server listening on port ' + port);
});
