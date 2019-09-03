const mysql = require('mysql');
const express = require('express');

const app = express();

app.use(express.static('assets'));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'bookstore'
  });

app.get('/books', (req,res) => {
    connection.query('select book_name from book_mast;', (err, rows) => {
        res.send(rows);
    })
});

app.get('/table', (req,res) => {
    connection.query('select book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast, author, category, publisher WHERE book_mast.aut_id = author.aut_id AND book_mast.cate_id = category.cate_id AND book_mast.pub_id = publisher.pub_id ORDER BY book_mast.book_name ASC;', (err, rows) => {
        res.send(rows);
    })
});

app.get('/', (req, res) => {
res.sendFile( __dirname + '/index.html');
});

connection.connect(function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Connection estabilished");
})

app.listen(8082);