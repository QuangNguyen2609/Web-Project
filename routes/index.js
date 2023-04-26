var express = require('express');
var app = express();


const users_email = [];
const users_password = [];

/* GET home page. */

// const logoutBtn = document.querySelector("#login-btn");
// logoutBtn.addEventListener("click", () => {
//   window.location.replace("/login");
// });
app.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});

app.get('/user', function(req, res) {
  res.sendFile('/workspaces/Web-Project/public/user.html');
});

app.get('/login', function(req, res) {
  res.sendFile('/workspaces/Web-Project/public/login.html');
});

app.get('/signup', function(req, res) {
  res.sendFile('/workspaces/Web-Project/public/signup.html');
});

app.get('/group', function(req, res) {
  res.sendFile('/workspaces/Web-Project/public/group.html');
});

app.post('/login', function(req, res){
  var email = req.body.email;
  var password = req.body.password;
  if (users_email.includes(email) && users_password.includes(password))
    res.redirect('/user');
  else
    res.redirect('/login');
});


app.post('/signup', function(req, res){
  users_email.push(req.body.email);
  users_password.push(req.body.password);
  res.redirect('/login');
});



module.exports = app;

