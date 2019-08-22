let buttonka = document.querySelector('button');
     
    buttonka.addEventListener('click', function() {
         let pke = document.querySelector('button');
         pke.innerHTML = `Last Pressed Key Code is: ${event.timeStamp}`;
         buttonka.disabled = true;
     });


    //  function getTimeStamp(event) {
    //     console.log(event.timeStamp);
    //     button.disabled = true;
    // }
    // let button = document.querySelector('button');
    // button.addEventListener('click', getTimeStamp);
