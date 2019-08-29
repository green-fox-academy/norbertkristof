// Write a method which takes two matrices as parameters and returns a new matrix. 
// The method should compare each element in the input matrices and fill the returned 
// matrix with the greater values. You only have to deal with square matrices. 
// A square matrix is a matrix with the same number of rows and columns.
// Write 2 different test cases for the method.
'use strict';

let matrix1 : number[][] = [
    [-1, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
]
let matrix2 : number[][] = [
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

function greatestMatrix(inputMatrix1: number[][], inputMatrix2: number[][]):number[][] {

    let pushTheGreatestMatrix: number[][] = [];
    let inputMatrix1Array: number[] = [];
    let inputMatrix2Array: number[] = [];

    for (let i: number = 0; i < inputMatrix1.length; i++){
        for (let j: number = 0; j < inputMatrix1.length; j++) {
            inputMatrix1Array.push(inputMatrix1[i][j]);
        }
    }

    for (let i: number = 0; i < inputMatrix2.length; i++){
        for (let j: number = 0; j < inputMatrix2.length; j++) {
            inputMatrix2Array.push(inputMatrix2[i][j]);
        }
    }

    for (let i: number = 0; i < inputMatrix1.length; i++){
        let row: number[] = [];
        for (let j: number = 0; j < inputMatrix1.length; j++) {
            if (inputMatrix1Array[j] >= inputMatrix2Array[j]) {
             row.push(inputMatrix1Array[j]);   
            } else {
             row.push(inputMatrix2Array[j]);
            }
        }
        pushTheGreatestMatrix.push(row);
    }
    return pushTheGreatestMatrix;
}

console.log(greatestMatrix(matrix1, matrix2));
