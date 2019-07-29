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

  let star: string = '*';
  let out: string = '';

  for (let i: number = 0; i < lineCount / 2; i++) {
      let out: string = '';
      for (let j: number = 0; j < lineCount - i; j++) {
          out = out + ' ';
      }
      for (let k: number = 1; k <= 2 * i + 1; k++) {
          out = out + '*';
      }
      console.log(out);
  }

  for (let l: number = 1; l <= lineCount / 2; l++) {
      let row2: string = '';
      for (let m: number = 0; m <= l + 3; m++) {
          row2 = row2 + ' ';
      }
      for (let n: number = 0; n < lineCount - (l * 2); n++) {
          row2 = row2 + '*';
      }
      console.log(row2);
  }

  