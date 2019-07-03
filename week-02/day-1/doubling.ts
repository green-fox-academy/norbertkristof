// -  Create a variable named `baseNum` and assign the value `123` to it
// -  Create a function called `doubling` that doubles it's input parameter and returns with an integer
// -  Log the result of `doubling(baseNum)` to the console

'use strict';
//let baseNum: number = 123;
//function makeGreen(name: doubler): any {
//    let newName = `Green ${name}`;
//    return newName;
//  }


//console.log(doubling(baseNum));



let baseNum: number = 123;
function doubling(baseNum) {
    let result: number = baseNum * 2;
    return result;
 }
 
 console.log(doubling(baseNum));