document.addEventListener('keyup', function(event) {
    let pke = document.querySelector('h1');
    pke.innerHTML = `Last Pressed Key Code is: ${event.keyCode}`;
});
