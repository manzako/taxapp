const express = require('express')
var path = require('path');
var bodyParser = require('body-parser');
const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//setup public folder
app.use(express.static('./public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//require file system module

var fs = require("file-system");


//include controllers

fs.readdirSync("controllers").forEach(function (file) {
  if (file.substr(-3) == ".js") {
    const route = require("./controllers/" + file);
    route.controller(app);
  }
});



module.exports = app;