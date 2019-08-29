'use strict';

// rotate matrix 90fok

let mx: number[][] = [
    [1,  2,  3,  4],
    [5,  6,  7,  8],
    [9, 10, 11, 12]
  ];

function rotate(matrix: number[][]):number[][] {
    const rowNum = matrix.length;
    const colNum = matrix[0].length;

    let x: number[][] = [];
    
    for (let j: number = 0; j < colNum; j++) {
      let row: number[] = [];
      for (let i: number = 0; i < rowNum; i++) {
        row.push(matrix[i][j])
      }
      x.push(row);
    }
  //  console.log(x);
    return x;
}

// function printmx(mx: number[][]): void {
//   mx.forEach(row => {
//     console.log(row);
//   });
// }

// printmx(rotate(mx));
console.table(rotate(mx));
//let printer = rotate(mx);
//console.log(printer);
//rotate(mx);
