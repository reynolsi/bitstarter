var express = require('express');

var app = express.createServer(express.logger());

var fs = require("fs");

var FILENAME_DEFAULT = "./index.html";

var readFile = function(response, fileName) {
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
  readFile(response, "./index.html");
  response.send('Hello World 3');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
