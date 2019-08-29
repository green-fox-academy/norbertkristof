// Create a function named isSymmetric that takes an n×n integer matrix (two dimensional array/list) 
// as a parameter and returns true if the matrix is symmetric or false if it is not.
// Symmetric means it has identical values along its diagonal axis from top-left to bottom-right, 
// as in the first example
// Example 1:
// [
//   [1, 0, 1],
//   [0, 2, 2],
//   [1, 2, 5]
// ]
// Output: true
// Example 2:
// [
//   [7, 7, 7],
//   [6, 5, 7],
//   [1, 2, 1]
// ]
// Output: false
'use strict';
let matrixOpp: number[][] = [
    [1, 0, 1],
    [0, 2, 2],            // ebben a feladatban csak vizsgalom nem csinalok uj array-t
    [1, 2, 5]             // boolean-al true v false a vegeredmeny kinyomtatom
  ];

function isSymmetric(matrix: number[][]):boolean {
    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix.length; j++) {
            if (matrix[i][j] == matrix [j][i]) {}
            else {
                return false;
            }
        }
    }
    return true;
}

console.log(isSymmetric(matrixOpp));