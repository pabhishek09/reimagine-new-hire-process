var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var logger = require('morgan');
var mongodb = require("mongodb");
var dotenv = require('dotenv');
var app = express();
dotenv.config();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
var db;

mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });

  app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + 'dist/index.html'));
  });


});
