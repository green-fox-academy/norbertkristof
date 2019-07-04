'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let l: number = 12.5;
let w: number = 5.2;
let h: number = 7.4;

let surf: number = 2 * (l*w + w*h + h*l);
let vol: number = l * w * h;

console.log(surf);
console.log(vol);