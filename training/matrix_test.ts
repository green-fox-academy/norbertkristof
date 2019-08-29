'use strict';

let input: number[][] = [
    [-1, 4, 5],
    [ 2, 3, 4]
];

function rotateClockwise(matrix: number[][]):number[][] {
    const rowNum = matrix.length;
    const colNum = matrix[0].length;

    let x: number[][] = [];
    
    for (let i: number = 0; i < colNum; i++) {
        let row: number[] = [];
        for (let j: number = 0; j < rowNum; j++) {
            row.push(matrix[j][i]);
        }
        x.push(row);
    }
    return x;
}

console.table(rotateClockwise(input));