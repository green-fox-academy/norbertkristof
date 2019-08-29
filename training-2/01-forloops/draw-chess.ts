
// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

'use strict';
let lineCountBaby: number = 8;

for (let row: number = 1; row <= lineCountBaby; row++) {
    let rajzol: string = '';
    for (let i: number = 1; i <= lineCountBaby; i++) {
        if ((row+i) % 2 == 0) {
            rajzol = rajzol + '%';
        } else {
            rajzol = rajzol + 'O'
        }
    }
    console.log(rajzol);
}