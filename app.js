const express = require('express')
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session')
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

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

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
