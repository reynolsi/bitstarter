var express = require('express');

var app = express.createServer(express.logger());

var fs = require("fs");

var FILENAME_DEFAULT = "./index.html";

var readFile = function(response, fileName) {
  buf = new Buffer(256);
  buf.write(fileName);

  response.send(" readfile --> ");
  response.send(fileName);

  if(fileName.length > 0) {
    fs.exists(fileName, function(exists){
      response.send(" readfile 1");
      if(exists)fs.readFile(fileName, "utf-8", function(error, data) {
        response.send(data);
      });
      else response.send("file not found");
    });
  } else { response.send("done nothing"); }
  response.send(" readfile <--");
};

app.get('/', function(request, response) {
//  readFile(response, FILENAME_DEFAULT);
    var data = fs.readFileSync(FILENAME_DEFAULT, 'utf8');
    response.send(data);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
