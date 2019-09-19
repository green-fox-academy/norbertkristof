'use strict';
const ul = document.querySelector('ul');


///////////////////////////////////////////////// GET

const loadData = () => {
  fetch('/api/items')
    .then(response => response.json())
    .then(response2 => {                  // response2 = ebbol irjuk bele a rolldown menube
      const myJson = response2.items;
      for (let i = 0; i < myJson.length; i++) {
        const option = document.createElement('option');
        option.text = `${myJson[i].title}`;
        option.value = `${myJson[i].id}`;
        const select = document.querySelector('select');
        select.appendChild(option);
      }
      return response2;
    })
    .then(response3 => {                // response3 = ebbol irjuk ki az ul / li -be hogy milyen elemek vannak a tablazatban
      const itemsToList = response3.items;
      itemsToList.forEach(e => {
        let li = document.createElement('li');
        li.textContent = `${e.title} (highest bid: ${e.highestBid} , ${e.highestBidderName})`;   // ugyelni a back-tick -re
        ul.appendChild(li);
      });
    })
}
window.onload = loadData;

///////////////////////////////////////////////////// POST

const bidBtn = document.getElementById('bid');
let biditem = document.getElementById('biditem');
let name = document.getElementById('name');
let amount = document.getElementById('amount');
let p = document.querySelector('p');



bidBtn.addEventListener('click', e => {
  fetch(`/api/items/${biditem.value}/bids`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id : biditem.value,
      name: name.value,
      amount: amount.value
    })
  })
  .then(response => response.json())
  .then(response =>{
    p.textContent = response.message;
    if (response.message === 'Your bid was successful!'){
      document.querySelector('form').reset();                  // itt torli ki a form-bol a beleirt informaciot (a feladat keri)
      ul.innerHTML = '';                                       // eloszor kitorli az infot, majd ->
      loadData();                                              // -> itt ujra beletolti a frissitett info -t
    }                                                          // figyelem! LOADDATA = az fent(sor7) megadott funkcio!
    return;
  })
  
});