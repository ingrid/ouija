var express = require('express');
var app = express();
app.use(express.static('../client'));
app.get('*', function (req, res) {
  res.sendfile('../client/index.html');
  
});

var expressServer = app.listen(3000);


module.exports = expressServer;
