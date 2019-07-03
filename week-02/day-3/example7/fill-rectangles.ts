'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let colors: string[] = ['yellow', 'blue', 'black', 'red'];

function rectangles(x: number, y: number) {
    ctx.fillRect(x, y, x, x);
}

for (let i = 0; i < colors.length; i++) {
    ctx.fillStyle = colors[i];
    rectangles(10 * (i + 1), 10 * (i + 1));
}
