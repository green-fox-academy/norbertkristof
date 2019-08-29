// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

'use srict';

// function printParams(input: any):void {
//     let listA: any[] = [];
//     for (let i: number = 0; i < input.length; i++) {      // for loop-al
//         listA.push(input[i]);
//     }
//     console.log(listA);
// }

// printParams([3, 'helloka', true, undefined, null]);

// .........................................................
// ugyanaz a feladat 2x, eloszor for loop, masodszor forEach
// .........................................................

function printParams(input: any[]):void {       // forEach-el
    //let listA: any[] = [];
    input.forEach(element => console.log(element));
    
}

printParams([3, 'helloka', true, undefined, null]);