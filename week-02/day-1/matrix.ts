'use strict';

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



function matrix(lengthOfRow) {
    let x: number[][] = [];
    for ( let outerArray: number = 0; outerArray < lengthOfRow; outerArray++) {
        let row: number[] = [];
        for (let column: number = 0; column < lengthOfRow - outerArray -1; column++) {
            row.push(0);
        }
        row.push(1);
        for (let columnsAfterOne: number = 0; columnsAfterOne < outerArray ; columnsAfterOne++) {
            row.push(0);
        }
        x.push(row);


    }
    console.log(x);
}

matrix(5);
