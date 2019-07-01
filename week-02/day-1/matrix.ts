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

let matrix: number[][] = [
    [],
    [1],
    [1],
    [1],
];

let size: number = 5;
for (let index = 0; index < size; index++) {
    let row: number[] = [];
    for (let inner: number = 0; inner < size; inner++) {
        row.push(inner);
    }
    matrix.push([index]);
}
matrix.forEach(function(row) {
    
}
])
console.log(row.join);