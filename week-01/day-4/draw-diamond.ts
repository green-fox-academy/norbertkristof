// Write a program that draws a
  // diamond like this:
  //
  //    *
  //   ***
  //  *****
  // *******
  //  *****
  //   ***
  //    *
  //
  // The diamond should have as many lines as lineCount is

'use strict';

let lineCount: number = 7;

for (let i: number = 0; i < (lineCount / 2); i++) {
  let row: string = '';
  for (let j: number = 1; j < lineCount - i; j++) {
    row = row + 'O';
  }
  for (let k: number = 1; k <= (2 * i + 1); k++) {
    row = row + '*';
  }
  console.log(row);
}

for (let i: number = 1; i <= (lineCount / 2); i++) {
  let row: string = '';
  for (let j: number = 1; j <= i + 3; j++) {
    row = row + ' ';
  }
  for (let k: number = 1; k <= (lineCount / 2) * 2 - (i * 2); k++) {
    row = row + '*';
  }
  console.log(row);
}