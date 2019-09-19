'use strict';

//////////////////////////////////// TICKET-et kiirjuk a ticket.html a kepernyore a tablazatba
// server.js-en ez a: app.get(/tickets)
// ezt kuldtuk server.js-rol ide:    res.send ( {  tickets : rows  } )

function render(data) {
    data = data.tickets;
    data.forEach(e => {

      //where
      let tableBody = document.querySelector('tbody');
      let tableRow = document.createElement('tr');
      let deleteBtn = document.createElement('button');
      let infosOfTickets = [e.id, e.reporter, e.manufacturer, e.serialNumber, e.descript, e.date];
      //Object.values(e)
  
      for (let i = 0; i <= infosOfTickets.length; i++) {
        let tableData = document.createElement('td');
        tableData.textContent = infosOfTickets[i];
        tableRow.appendChild(tableData);
        if (i === infosOfTickets.length) {
          tableData.appendChild(deleteBtn);
          deleteBtn.textContent = "delete";
          deleteBtn.id = `${[e.id]}`;
          deleteBtn.className = 'delete';
        }
      }
      tableBody.appendChild(tableRow);
    });
  }
  

//////////////////// benyomjuk a delete gombot

  function btnCatcher() {
    const allbtn = document.getElementsByClassName('delete');
  
    for (let i = 0; i < allbtn.length; i++) {
      allbtn[i].addEventListener('click', e => {

////// e.target = maga a gomb
////// a parent elementje = td
////// annak a parent elementje = tr
////// ennek a firstchildja = id (az id-ja a sql tablaban)
////// ami alapjan ugye tudunk torolni az adatbazisban!         -->

        const ticketIdToDelete = e.target.parentElement.parentElement.firstElementChild.textContent;    // SQL-bol torli a cuccokat, egyel lentebb fetch utan
        fetch(`/tickets/${ticketIdToDelete}`, {
          method: 'DELETE',
          headers: {
            authorization: 'voala',        // a _ voala _ bele van irva a headerbe!!
          }
        })

          .then(response => {
            if (response.status == 204) {       // vagyis minden franko, akkor:
              e.target.parentElement.parentElement.remove();
              console.log('Delete successful.');
            } else {
              throw new Error(response.text())
            }
          })
          .catch(error => console.log(error.message));
      })
    }
  }
  
  const URL = 'http://localhost:3000';
  
  fetch(URL + '/tickets')
    .then(response => response.json())
    .then(render)
    .then(btnCatcher)