var express = require('express');
// const mysql = require('mysql2');
var app = express();

// database connection example
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'quang',
//   password: 'quang2003',
//   database: 'wdc'
// });

// connection.connect();

// connection.query('SELECT * FROM users', (error, results, fields) => {
//   if (error)
//     throw error;
//   console.log(results);
// });


const users_email = [];
const users_password = [];
var cur_email = null;

/* GET home page. */

// const logoutBtn = document.querySelector("#login-btn");
// logoutBtn.addEventListener("click", () => {
//   window.location.replace("/login");
// });
app.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});

app.get('/user', function(req, res) {
  if (cur_email === null)
    res.redirect('/');
  res.sendFile('/workspaces/Web-Project/public/user.html');
});

app.get('/login', function(req, res) {
  cur_email = null;
  res.sendFile('/workspaces/Web-Project/public/login.html');
});

app.get('/signup', function(req, res) {
  res.sendFile('/workspaces/Web-Project/public/signup.html');
});

app.get('/group', function(req, res) {
  res.sendFile('/workspaces/Web-Project/public/group.html');
});

app.get('/group_user', function(req, res) {
  if (cur_email === null)
    res.redirect('/');
  res.sendFile('/workspaces/Web-Project/public/group_user.html');
});

app.get('/event', function(req, res) {
  res.sendFile('/workspaces/Web-Project/public/event.html');
});

app.get('/event_user', function(req, res) {
  if (cur_email === null)
    res.redirect('/');
  res.sendFile('/workspaces/Web-Project/public/event_user.html');
});

app.post('/login', function(req, res){
  var email = req.body.email;
  var password = req.body.password;
  cur_email = email;
  if (users_email.includes(email) && users_password.includes(password))
    res.redirect('/user');
  else
    res.redirect('/login');
});


app.post('/signup', function(req, res){
  users_email.push(req.body.email);
  users_password.push(req.body.password);
  // req.body['user-type'] user or manager
  res.redirect('/login');
});



module.exports = app;

