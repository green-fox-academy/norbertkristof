'use strict';

// vizsgalo trial exam - symetric

let matrix: number[][] = [
    [1, 0, 1],
    [0, 2, 2],
    [1, 2, 5]
  ];

function isSymmetric(matrix: number[][]):boolean {
    let n: number = matrix.length;
    for (let i: number = 0; i < n; i++) {
      for (let j: number = 0; j < n; j++) {
        if (matrix[i][j] == matrix[j][i]) {}
        else {
          return false;
        }
      }
    }
    return true;
}

isSymmetric(matrix);
console.log(isSymmetric(
  [
    [3]
  ]
));