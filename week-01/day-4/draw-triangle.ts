'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let star: string = '*';
let out: string = '';
for (let i: number = 0; i < lineCount; i++) {
    out = '';
    for (let j: number = 0; j < i + 1; j++) {
        out = out + star;
    }
    console.log(out);
}
