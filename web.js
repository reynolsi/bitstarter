var express = require('express');

var app = express.createServer(express.logger());

var fs = require("fs");

var FILENAME_DEFAULT = "./index.html";

var readFile = function(fileName) {
  if(fileName.length > 0) {
    fs.exists(fileName, function(exists){
      if(exists)fs.readFile(fileName, "utf-8", function(error, data) {
        console.log(data);
      });
      else console.log("file not found");
    });
  } else { /* do nothing */ }
};

app.get('/', function(request, response) {
  readFile(FILENAME_DEFAULT);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
