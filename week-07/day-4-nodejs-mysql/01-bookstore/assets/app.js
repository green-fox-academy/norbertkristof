'use strict'

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if(xhr.status === 200) {

      function getBookList() {
      let result = xhr.responseText;
      let parsedResult = JSON.parse(result);
      console.log(parsedResult);

      let ul = document.createElement('ul');
      document.querySelector('body').appendChild(ul);
      
      for (let i = 0; i < parsedResult.length; i++){
      let li = document.createElement('li');
      li.textContent = parsedResult[i].book_name;
      ul.appendChild(li);
      }
    }
    getBookList();
  }

    else {
      console.log('Something went wrong');
    }
  }
};
xhr.open('GET', 'http://localhost:8082/books');
xhr.send('ok');

const xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = function() {
  if (xhr2.readyState === XMLHttpRequest.DONE) {
    if(xhr2.status === 200) {

      function getTable() {
      let result = xhr2.responseText;
      let parsedResult = JSON.parse(result);
      console.log(parsedResult);

      let table = document.createElement('table');
      document.querySelector('div').appendChild(table);
      
      for (let i = 0; i < parsedResult.length; i++){
      let tr = document.createElement('tr');
      table.appendChild(tr);
      let td = document.createElement('td');
      td.textContent = parsedResult[i].book_name;
      tr.appendChild(td);
      let td1 = document.createElement('td');
      td1.textContent = parsedResult[i].aut_name;
      tr.appendChild(td1);
      let td2 = document.createElement('td');
      td2.textContent = parsedResult[i].cate_descript;
      tr.appendChild(td2);
      let td3 = document.createElement('td');
      td3.textContent = parsedResult[i].pub_name;
      tr.appendChild(td3);
      let td4 = document.createElement('td');
      td4.textContent = parsedResult[i].book_price;
      tr.appendChild(td4);
      }
    }
    getTable();
  }

    else {
      console.log('Something went wrong');
    }
  }
};

xhr2.open('GET', 'http://localhost:8082/table');
xhr2.send('gg');
