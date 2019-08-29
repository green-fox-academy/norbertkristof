// Write a method which takes a 2D array / matrix containing integer numbers. 
// It should return the numbers in a list without any duplication.
// UNIT TESTING Write 2 different test cases for the method.
// Example 1
// Input
// [
//   [1, 1],
//   [4, 2]
// ]
// Output
// [1, 4, 2]                  // UNIT TEST is van hozza!!!!!
// Example 2
// Input
// [
//   [4, 3, -1],
//   [10, 2, 5],
//   [-2, 3, 4]
// ]
// Output
// [4, 3, -1, 10, 2, 5, -2]
'use strict';
let mxmxmx: number[][] = [
    [1, 1],
    [4, 2]
];

function uniqueAa(arr: number[][]):number[] {
    let uniqueArr: number[] = [];
    
    for (let i: number = 0; i < arr.length; i++) {

        for (let j: number = 0; j < arr[i].length; j++) {
            if (uniqueArr.indexOf(arr[i][j]) === -1) {
                uniqueArr.push(arr[i][j]);
            }
        }
    }
    return uniqueArr;
}
console.table(uniqueAa(mxmxmx));

export default uniqueAa;    // unit testhez ki kell rakni

//..........................................................
// nagyon baba masik megoldas   .includes   -al
//..........................................................

// let mxmx: number[][] = [[1, 1], [4, 2]];

// export default function uniqueNumbers(matrix: number[][]): number[] {
//   let x: number[] = [];

//   for (let i: number = 0; i < matrix.length; i++) {
//     for (let j: number = 0; j < matrix.length; j++) {
//         if (!x.includes(matrix[i][j])) {        // nagyon baba megoldas includes.al.   ha nem includolja, akkor nyomd bele.
//         x.push(matrix[i][j]);
//       }
//     }
// }
// return x;
// }
// console.table(uniqueNumbers(mxmx));