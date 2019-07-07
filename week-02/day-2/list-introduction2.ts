'use strict';
    
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function reverse(reversed:string) {
    let kk: string = '';
    for (let i: number = reversed.length - 1; i > -1; i--) {
        kk += reversed[i];
    }
    return kk;

    //return reversed.split('').reverse().join('');
    //return reversed.split('').reverse().join('');
  
}

  console.log(reverse(reversed));

//export = reverse;
