// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

'use strict';

// with the built in method

let numList: number[] = [3, 4, 5, 6, 7];
console.log(numList.reverse());

// new temp array and loooop

let numList1: number[] = [3, 4, 5, 6, 7];
let numList2: number[] = []

for (let index: number = numList1.length - 1; index >= 0; index--) {
    numList2.push(numList1[index]);
}

console.log(numList2);
