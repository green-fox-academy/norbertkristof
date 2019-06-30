//    *
//   ***
//  *****
// *******
'use strict';

const lineCount: number = 4;
let empty: string = 'MAK';
let star: string = '*';
let output: string = '';
let output2: string = '';

for (let i: number = 0; i < lineCount; i++) {
    output = '';
    for (let j: number = 0; j < i+1; j++) {
    //output = '';    
      //for (let k: number = 0; k <= lineCount; k++) {
       output = output + star;
      //}
    } 
    //console.log(output2);
    console.log(output);
  }