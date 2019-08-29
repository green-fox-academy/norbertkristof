// Write a method which takes a 2D array / matrix containing integer numbers. 
// It should return the numbers in a list without any duplication.
// Write 2 different test cases for the method.
'use strict';

let mxmx: number[][] = [[1, 1], [4, 2]];

export default function uniqueNumbers(matrix: number[][]): number[] {
  let x: number[] = [];

  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < matrix.length; j++) {
        if (!x.includes(matrix[i][j])) {
        x.push(matrix[i][j]);
      }
    }
}
return x;
}
console.table(uniqueNumbers(mxmx));