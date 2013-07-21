var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express.createServer(express.logger());

app.configure(function() {
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.bodyParser());
    app.use(express.logger("short"));
});

var indexFile = fs.readFileSync('./index.html');

var buf = new Buffer(indexFile);

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
