// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
'use strict';
function matrixosFeladat(matrix: any):any {
    let x: number[][] = [];
    for (let i: number = 0; i < matrix; i++) {
        let arrayIn: number[] = [];
        for (let j: number = matrix - 1; j > i; j--) {
            arrayIn.push(0);
        }
        arrayIn.push(1);
        for (let k: number = 0; k < i; k++) {
            arrayIn.push(0);
        }
        x.push(arrayIn);
    }
    return x;   
}

console.log(matrixosFeladat(5));