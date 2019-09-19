'use strict';

/////////////////// USERS
//reporters (server.js (sor108)
//This endpoint list all the available users
// "id" : 1,
// "name" : "Egg"

// azt is csinalja h beleirja a option-select form-ba h milyen user-ek vannak

const loadData = () => {
  fetch('/users')
    .then(response => response.json())
    .then(response2 => {
      const myJson = response2.users;   // users =  constans a server.js -file-bol athozva
      for (let i = 0; i < myJson.length; i++) {
        const option = document.createElement('option');
        option.text = `${myJson[i].reporter}`;
        option.value = `${myJson[i].rep_id}`;
        const select = document.querySelector('select');
        select.appendChild(option);
      }
    })
}

window.onload = loadData;

//////////////////////// POST
//post new report

const reportBtn = document.getElementById('report');
const name = document.getElementById('name');
const manufacturer = document.getElementById('manufacturer');
const serialNumber = document.getElementById('serialnumber');
const description = document.getElementById('description');

reportBtn.addEventListener('click', e => {
  fetch('/ticket', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name.value,
      manufacturer: manufacturer.value,
      serialNumber: serialNumber.value,
      descript: description.value            // descript = igy van beirva a tablazatba a row neve ez!
    })
  })
  
  .then(res => console.log(res.status))
  document.querySelector('form').reset();    // kiuriti a form-ot h eltunjon belole a szoveg!
    
});

