'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use(express.static('assets'));
app.use(express.json());

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reportedtickets'
});

//connecting to database
connection.connect(error => {
  if (error) {
    console.log(`cannot connect to database.`)
    return;
  }
  console.log('connection established.')
})

//rendering index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


/////////////////////////////////////// GET

/// sending tickets from database

app.get('/tickets', (req, res) => {
  const { manufacturer, reporter } = req.query;
  let tickets = `SELECT * FROM  reportedtickets`;
  let omg = [];

// QUERY PARAMETER part:
// if there is no query parameter, the backend must send all the tickets
// if there is a --> manufacturer query parameter, the backend must filter only the tickets with the given manufacturer
// if there is a --> reporter query parameter, the backend must filter only the the tickets which are reported by the given user
// the manufacturer and reporter query parameters can be mixed
// http://localhost:8080/tickets ? manufacturer = dell

  if (manufacturer && reporter) { // eloszor a legszigorubb feltetelnek kell megfelelni
    tickets = `SELECT * FROM reportedtickets WHERE manufacturer = ? AND reporter = ?`;
    omg = [manufacturer, reporter];
  } else if (manufacturer) {
    tickets = `SELECT * FROM reportedtickets WHERE manufacturer = ? `;
    omg = [manufacturer];
  } else if (reporter) {
    tickets = `SELECT * FROM reportedtickets WHERE reporter = ?`;
    omg = [reporter];
  } else {
    tickets = `SELECT id,reporters.reporter,manufacturer,serialNumber,descript,date FROM reportedtickets JOIN reporters ON reporters.rep_id=reportedtickets.reporter;`;
  }                  /// reporters TABLAZATBOL a reporter-t
                      //                belejoinol-ja a reporters tablazatbol is, REPORTER-t mint olyat   ^^    feltolteni nem lehet, az adott.

  connection.query(tickets, omg, (err, rows) => {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send({tickets : rows});
  });
});


//////////////////////////////////////// POST
//adding new ticket

app.post('/ticket', (req, res) => {
  const { name, manufacturer, serialNumber, descript } = req.body;
  let date = new Date;

  //validation
  if (!name || !manufacturer || !serialNumber || !descript) {
    res.sendStatus(400); // if you use res.status you have to res.send something!!!
  } else if (isNaN(Number.parseInt(serialNumber, 10))) {   // ha nem szam a serial number amit beir
    res.sendStatus(401);
  } else {
    connection.query(`INSERT INTO reportedTickets (reporter, manufacturer, serialNumber, descript, date) 
    VALUES(?,?,?,?,?)`, [name, manufacturer, serialNumber, descript, date], (err, rows) => {
      if (err) {
        res.sendStatus(500); //if error in query ALWAYS 500!!!
      } else {
        res.status(201);     // if you feel the power you can return the reporter name instead of the id ->
        connection.query('select * from reportedTickets WHERE id=?',rows.insertId, (err,rows) =>{
          if (err) {
            res.sendStatus(500); 
          }
          res.send(rows);
        })
      }
    })
  }

})


///////////////////////////// GET
/// getting users from database

app.get('/users', (req, res) => {
  const users = 'select * from  reporters';
  connection.query(users, (err, rows) => {
    if (err) {
      res.sendStatus(500); 
    } else {
      res.send({
        users: rows});
    }
  });
});


/////////////////////////////// delete post

// it deletes the specified ticket if the request's header contains the Authorization HTTP header with the value of 'voala'. 
// The endpoint should: validate the header
// if authorization header is missing it should return an empty response with a 401 status code
// delete the ticket from the database
// return an empty response with a 204 status code
// return an empty response with a 500 status code if any error has occurred
// Example query:
// [DELETE] http://localhost:8080/tickets/12
// this should return an empty response, with a 204 status code

app.delete('/tickets/:id', (req, res) => {

  if (req.headers.authorization != 'voala') {     // if authorisation header is missing
    res.sendStatus(401);
    return;
  } else if (isNaN(Number.parseInt(req.params.id))) {       // ez nezi meg h van e ilyen szamu id a tablazatban
    res.status(400);
    res.send({ error: 'Invalid ticket id.' });
    return;
  }

  connection.query('DELETE FROM reportedTickets WHERE id = ?', req.params.id, (err, rows) => {
    if (err) {
      res.sendStatus(500);      // ha barmi para tortenik dobja vissza ezt
    } else {
      console.log('Data deleted from DB.');
      res.sendStatus(204);                // ha sikerul dobja vissza ezt
    }
  });
})


////////////// OUTRO

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});