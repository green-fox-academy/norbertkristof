'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3030;

app.use(express.json());

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'reddit'
});

conn.connect((err) => {
    if (err) {
        console.log('Error connecting to DB');
        console.log(err.message);
        return;
    }
    console.log('DB connection established');
});

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`App is listening on port# ${PORT}`);
});