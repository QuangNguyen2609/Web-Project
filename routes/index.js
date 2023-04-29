var express = require('express');
const mysql = require('mysql2');
var app = express();

// database connection example
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'quang',
  password: 'quang2003',
  database: 'wdc'
});

connection.connect();



const users_email = [];
const users_password = [];
var emailArray = [];
var passwordArray = [];
var cur_email = null;
var sql, email, password;


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
  email = req.body.email;
  password = req.body.password;
  cur_email = email;
  sql = `SELECT email, password FROM Users;`;
  connection.query(sql, (error, results, fields) => {
  if (error) throw error;
    emailArray = results.map(row => row.email);
    passwordArray = results.map(row => row.password);
    console.log(emailArray);
    console.log(passwordArray);
  });

  if (emailArray.includes(email) && passwordArray.includes(password))
    res.redirect('/user');
  else
    res.redirect('/login');
    
});


app.post('/signup', function(req, res){
  var email = req.body.email;
  var password = req.body.password;

  // Check if user already exists in database
  var sql = `SELECT * FROM Users WHERE email = '${email}'`;
  connection.query(sql, (error, results, fields) => {
    if (error) throw error;
    if (results.length > 0) {
      console.log(`User with email ${email} already exists`);
      res.redirect('/login');
    } else {
      // Insert new user into database
      sql = `INSERT INTO Users(email, password) VALUES ('${email}', '${password}')`;
      connection.query(sql, (error, results, fields) => {
        if (error) throw error;
        console.log(`New user ${email} created`);
        res.redirect('/login');
      });
    }
  });
});



module.exports = app;

