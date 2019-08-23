let xCor = 0;
let yCor = 0;
let size = 200;

function navigate(ev) {
    if (event.target.getAttribute('data-action') === 'move') {
        if (event.target.getAttribute('data-direction') === 'up') {
            div.style.backgroundPositionY = `${yCor-=10}px`;
       } else if (event.target.getAttribute('data-direction') === 'down') {
            div.style.backgroundPositionY = `${yCor+=10}px`;
        } else if (event.target.getAttribute('data-direction') === 'left') {
            div.style.backgroundPositionX = `${xCor-=10}px`;
        } else if (event.target.getAttribute('data-direction') === 'right') {
            div.style.backgroundPositionX = `${xCor+=10}px`;
        }
    } else if (event.target.getAttribute('data-action') === 'zoom') {
        if (event.target.getAttribute('data-direction') === 'in') {
            div.style.backgroundSize = `${size+=20}%`;
        } else if (event.target.getAttribute('data-direction') === 'out') {
            div.style.backgroundSize = `${size-=20}%`;
        }
    }
}
let div = document.querySelector('div');
let nav = document.getElementsByTagName('nav'); // querySelectorAll is lehet
let img = document.getElementsByClassName('img-inspector');
nav[0].addEventListener('click', navigate);
console.log(nav);