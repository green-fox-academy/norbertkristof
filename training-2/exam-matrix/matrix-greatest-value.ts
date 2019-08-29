// Write a method which takes two matrices as parameters and returns a new matrix. 
// The method should compare each element in the input matrices and fill the returned 
// matrix with the greater values. You only have to deal with square matrices. 
// A square matrix is a matrix with the same number of rows and columns.
// Write 2 different test cases for the method.
'use strict';

let myMatrixV1 : number[][] = [
    [-1, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
]
let myMatrixV2 : number[][] = [
    [0, 2, 0],
    [0, 1, 0],
    [0, 0, 1]
] 
// Output:
// [
//   [0, 1, 0],
//   [0, 1, 0],
//   [0, 1, 0]
// ]

function greatestValue(inputMatrixV1: number[][], inputMatrixV2: number[][]): number[][] {
    let outputMatrix: number[][] = inputMatrixV1;
    for (let i: number = 0; i < inputMatrixV1.length; i++) {
        for (let j: number = 0; j < inputMatrixV1.length; j++) {
            if (inputMatrixV1[i][j] > inputMatrixV2[i][j]) {
                outputMatrix[i][j] = inputMatrixV1[i][j];
            } else {
                outputMatrix[i][j] = inputMatrixV2[i][j];
            }
        }
    }
    return outputMatrix;
}

console.log(greatestValue(myMatrixV1, myMatrixV2));
export default greatestValue;