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

'use strict';

let lineCount: number = 10;

for (let row: number = 0; row < lineCount; row++) {
    let square: string = '%';
    for  (let j: number = 0; j < lineCount -2; j++) {
        if (row == 0) {
            square += '%';
        }
    }
    for (let l: number = 0; l < lineCount -2; l++) {
        if (row > 0 && row < lineCount - 1) {
            square +=' ';
        }
    }
    for (let k: number = 0; k < lineCount -2; k++) {
        if (row == lineCount -1) {
            square += '%';
        }
    }
    square += '%';
   console.log(square);
}