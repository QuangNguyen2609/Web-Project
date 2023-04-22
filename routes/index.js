var express = require('express');
var app = express();
// var router = express.Router();


/* GET home page. */
app.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});

app.get('/login.html', function(req, res) {
  res.render('login', {title:'Login'});
});

app.get('/signup.html', function(req, res) {
  res.render('login', {title:'Signup'});
});

module.exports = app;

