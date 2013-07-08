var express = require('express');

var app = express.createServer(express.logger());

var fs = require("fs");

var FILENAME_DEFAULT = "./index.html";

var readFile = function(fileName) {
  if(fileName.length > 0) {
    fs.exists(fileName, function(exists){
      if(exists)fs.readFile(fileName, "utf-8", function(error, data) {
        response.send(data);
      });
      else response.send("file not found");
    });
  } else { response.send("done nothing"); }
};

app.get('/', function(request, response) {
  readFile(FILENAME_DEFAULT);
  response.send('Hello World 2');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
