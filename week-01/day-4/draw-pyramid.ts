'use strict';

let lineCount: number = 75;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let star: string = '*';
let out: string = '';

for (let i: number = 0; i < lineCount; i++) {
    out = '';
    for (let j: number = 0; j < lineCount - i; j++) {
        out = out + ' '; // out += ' ';
    } 
    for (let k: number = 1; k <= 2 * i + 1; k++) {
            out = out + star; //out += star;
        }
        console.log(out);
}