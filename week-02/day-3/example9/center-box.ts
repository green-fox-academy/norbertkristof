'use strict';

const myCanvasWidth: number = 600;
const myCanvasHeigth: number = 400;

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
canvas.width = myCanvasWidth;
canvas.height = myCanvasHeigth;
const ctx = canvas.getContext('2d');


// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function square(x: number) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(myCanvasWidth / 2 - (x / 2), myCanvasHeigth / 2 - (x / 2));
    ctx.strokeRect(myCanvasWidth / 2 - (x / 2), myCanvasHeigth / 2 - (x / 2), x, x);
    ctx.stroke();
}

//square(50);

for (let i = 0; i < 4; i++) {
    square(i * 30, i * 30);
}