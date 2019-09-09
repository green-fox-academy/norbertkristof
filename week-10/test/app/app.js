const express = require('express');
const fetch = require('node-fetch');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mysql'
});

app.set('view engine', 'ejs');
app.use(express.static('./assets'));
app.use(cookieParser())


function authGuard (req, res, next) {
  if (req.cookies.logged_in !== 'true') {
    res.redirect('login');
    return;
  }
  next();
}


app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', express.urlencoded(), (req, res) => {
  const { username, password } = req.body;

  // validate input
  // check in database
  // create a cookie
  // redirect to the main page

  if (!(username && password)) {
    res.render('login', { error: 'Missing uname or password' });
  }
  connection.query(
    'SELECT * from users where username = ? AND password = ?',
    [username, password],
    (err, rows) => {
      if (err) {
        console.log('Cannot log in user: ', err);
        res.sendStatus(500);
        return;
      }

      if(rows.length === 0) {
        res.render('login', { error: 'Incorrect uname or password' });
        return;
      }

      res.cookie('logged_in', true);
      res.redirect('/articles');
  });
});

app.get('/articles', authGuard, (req, res) => {
  res.render('index');
});

app.get('/api/articles', authGuard, (req, res) => {
  fetch('https://chain-chess.glitch.me/')
    .then(answer => answer.json())
    .then(json => res.render('articles', { articles: json }));
});

module.exports = app;