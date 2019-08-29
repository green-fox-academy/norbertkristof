// Create a function named rotateMatrix that takes an n×n integer matrix (array of arrays) 
// as parameter and returns a matrix which elements are rotated 90 degrees clockwise.
// Example
// Input
// [
//   [1, 2, 3],        // counterclockwise es string rotate van a training 1-direktoriban!
//   [4, 5, 6],        // illetve van olyan is amiben nem nxn, hanem teglalap!
//   [7, 8, 9]
// ]
// Output
// [ [ 7, 4, 1 ],
//   [ 8, 5, 2 ],
//   [ 9, 6, 3 ] 
// ]
'use strict';
let mxmx: number[][] = [
    [1, 2, 3],        
    [4, 5, 6],
    [7, 8, 9]
  ];

function rotateMatrix(inputMatrix: number[][]):number[][] {

    let kulsoMatrix: number[][] = [];
    for (let i: number = 0; i < inputMatrix.length; i++){
        let belsoMatrix: number[] = [];
        for (let j: number = 0; j < inputMatrix.length; j++) {
            belsoMatrix.push(inputMatrix[j][i]);
        }
        kulsoMatrix.push(belsoMatrix.reverse());
    }
    return kulsoMatrix;

}

console.table(rotateMatrix(mxmx));

