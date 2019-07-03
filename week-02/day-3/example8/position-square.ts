'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

//let x: number = 100;
//let y: number = 200;


/*ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(x, y);
ctx.fillRect(x, y, 50, 50);
ctx.stroke();
*/

function square(x: number, y: number) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.fillRect(x, y, 50, 50);
    ctx.stroke();
}


for (let i = 0; i < 3; i++) {
    square(i * 150, i * 30);
}

/*ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(300, 200);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(300, 0);
ctx.strokeStyle = 'green';
ctx.lineTo(300, 200);
ctx.stroke();