'use strict';

// rotate matrix 90fok

let mx: number[][] = [
    [-1,  4,  5],
    [2,  3,  4],
  ];

function rotate(matrix: number[][]):number[][] {
    const rowNum = matrix.length;
    const colNum = matrix[0].length;

    let x: number[][] = [];
    
    for (let i: number = 0; i < colNum; i++) {
      let row: number[] = [];
      for (let j: number = 0; j < rowNum; j++) {
        row.push(matrix[j][i])
      }
      x.push(row.reverse());
    }
    return x;
}

// function printmx(mx: number[][]): void {
//   mx.forEach(row => {
//     console.log(row);
//   });
// }

// printmx(rotate(mx));
console.table(rotate(mx));