// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`


// let numLista: number[] = [3, 4, 5, 6, 7];       // beepitettel csinalva, reverse function

// function reverseBaby(input: any):any {
    //     return input.reverse();
    // }
    
    // console.log(reverseBaby(numLista));
'use strict';

let numLista: number[] = [3, 4, 5, 6, 7]; 

let tempArray: number[] = [];

function beleRakom(input: any):any {
    let magasLabda: number[] = [];
    for (let i: number = input.length - 1; i >= 0; i--) {   // funkcioba rakva, pusholom az uj array-be
    magasLabda.push(input[i]);
    }
    return magasLabda;
}
console.log(beleRakom(numLista));