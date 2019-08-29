// Write a method that takes a matrix as a parameter.
// The function should:
// - multiply each even number by 2 in each even indexed row
// - multiply each odd number by 2 in each odd indexed row
// Write at least 2 different test cases. ( unit testing )
// Output
// [
//   [1,  3,  12, 4],
//   [14, 10, 6,  2],
//   [3,  3,  1,  5],
//   [18, 0,  10, 6]
// ]
'use strict';
let mxmx: number[][] = 
[
    [1, 3, 6, 2],
    [7, 5, 6, 1],
    [3, 3, 1, 5],
    [9, 0, 5, 3]
  ];

export default function doubleUp(matrix: number[][]):number[][] {    // ki van mar exportalva unit testre!
    let thisIsTheFinal: number[][] = [];                             // ha nem kell unit test le kell torolni elotte!
    for (let i: number = 0; i < matrix.length; i++) {
        let row: number[] = [];
        for (let j: number = 0; j < matrix.length; j++) {
            if (i % 2 === 0 && matrix[i][j] % 2 === 0) {
              matrix[i][j] *= 2;
            } else if (i % 2 !== 0 && matrix[i][j] % 2 !== 0) {
              matrix[i][j] *= 2;
            }
            row.push(matrix[i][j]);
        }
        thisIsTheFinal.push(row);
    }
    return thisIsTheFinal;
}
console.table(doubleUp(mxmx));