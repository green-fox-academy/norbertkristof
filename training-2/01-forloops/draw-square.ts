
// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

//let bigyula: string = '%';
'use strict';

let lineCountka: number = 6;

for (let row: number = 0; row < lineCountka; row++) {
    let square: string = '%';
    
    for (let i: number = 0; i < lineCountka -2; i++) {
        if (row === 0) {
            square += '%';
        }    
    } for (let j: number = 0; j < lineCountka - 2; j++) {
        if (row > 0 && row < lineCountka) {
            square += ' ';
        }
    } for (let k: number = 0; k < lineCountka -2; k++) {
        if (row === lineCountka - 1) {
            square += '%';
        }

    }
    square += '%';
 console.log(square);
}

