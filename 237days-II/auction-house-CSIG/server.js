'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ferrilata'
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

/////////////////////////////////////////////// GET

//listing auction items, dropdown bid items
app.get('/api/items', (req,res) => {
  const items = `select * from items;`
  connection.query(items, (err, rows) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send({
        items : rows
      });
    }
  });
})


//////////////////////////////////////////////// POST

app.post(`/api/items/:id/bids`,(req,res) => {
  const {name, amount} = req.body;              // NAME es AMOUNT bemenetem van a form-ban
  const id = req.params.id;
  let data = [name,amount,id]         // fontos a sorrend, mert lent(sor73) tolom bele ilyn sorrendbe a tablazatba sql parancs szavakkal
  connection.query('SELECT * FROM items WHERE id =?', id, (err,resp) => {      // figyelni hogy valahol RESP valahol RES
    if(err){
      res.sendStatus(500);
    }else if(!resp[0]){
      res.sendStatus(400);
    }else {
      if(new Date() > resp[0].expiryDate){
        res.send({
          message: 'The auction is over!'
        })
      } else if (amount <= resp[0].highestBid) {
        res.send({
          message: 'Your bid is below the highest bid!'
        });
      }
       else{
        connection.query('UPDATE items SET highestBidderName = ?,highestBid = ? WHERE id=?',data, (err,rows) => {
          if(err){
            res.sendStatus(500);
          }else{
            res.send({
              message: 'Your bid was successful!'
            })
          }
        })
      }
    }
  })
})


///////////////////////////////// OUTRO

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});