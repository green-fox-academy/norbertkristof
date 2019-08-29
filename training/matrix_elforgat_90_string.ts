'use strict';

// rotate matrix 90fok stringgel

let rajz: string[] = [
    "###.....",
    "..###...",
    "....###.",
    ".....###",
    ".....###",
    "....###.",
    "..###...",
    "###....."
  ];

function rotate(rajzocska: string[]):string[][] {
    let matrix: string[][] = [];
    rajzocska.forEach(element => {
      matrix.push(Array.from(element));
    });

    const rowNum = matrix.length;
    const colNum = matrix[0].length;

    let x: string[][] = [];
    
    for (let i: number = 0; i < colNum; i++) {
      let row: string[] = [];
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

console.table(rotate(rajz));
console.log(rotate(rajz));