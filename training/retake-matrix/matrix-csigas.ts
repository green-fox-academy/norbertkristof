'use strict';


let matrix1 : number[][] = [
    [-1, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
]

let matrix2 : number[][] = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
]

/* 
Output:
[
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0]
]
*/

//function

function greaterMatrix(matrix1 : number[][], matrix2: number[][]) : number[][] {

    let matrix1Array : number[] = [];
    let matrix2Array : number[] = [];
    let comparedMatrix : number[][] = [];

    
    for(let i : number = 0; i <matrix1.length; i++){
        for(let j : number = 0; j< matrix1.length; j++){
            matrix1Array.push(matrix1[i][j])
        }
    }
    
    for (let i: number = 0; i < matrix2.length; i++) {
        for (let j: number = 0; j < matrix2.length; j++) {
            matrix2Array.push(matrix2[i][j])
        }
    }
    
    for(let i : number = 0; i< matrix1.length; i++){ 
        let row : number[] = [];
        for (let j: number = 0; j < matrix1.length; j++){
            if(matrix1Array[j] >= matrix2Array[j]){
                row.push(matrix1Array[j]);
            }else {
                row.push(matrix2Array[j]);
            }
        } 
        comparedMatrix.push(row);
    }

return comparedMatrix;
}

console.log(greaterMatrix(matrix1,matrix2))


export {greaterMatrix} ;