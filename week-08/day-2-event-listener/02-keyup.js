//const log = document.getElementById('log');

document.addEventListener('keyup', function() {
    let pke = document.querySelector('h1');
    pke.innerHTML = ` ${e.code}`;
    //console.log(e.code);
});

// function logKey(e) {
//   log.textContent += ` ${e.code}`;
// }



// let buttonka = document.querySelector('button');
//      buttonka.addEventListener('click', function() {
//          let list = document.getElementsByTagName('li'); // lehet querySelectorAll  is
//          console.log(list);
//          let pke = document.querySelector('p');
//          pke.innerHTML = list.length;
//          list[2].innerHTML = 'pista';
//          list[3].textContent = 'jancsi';
//      });