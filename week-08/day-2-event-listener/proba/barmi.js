'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'barmi'
});

// let newTodo = {name: 'please work', status: 0};
// connection.query('insert into todos set ?', newTodo, (err, rows) => {
//   console.log(rows);
//   console.log(err);
// });

connection.query('select * from author;', (err, rows) => {
  console.log(rows);
  console.log(err);
  connection.end();
});