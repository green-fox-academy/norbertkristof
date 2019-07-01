'use strict';
let myName: string = "norbs";

let array: string[] = ["morzsi", "lisa", 'furkesz'];

console.log(array);

for (let i: number = 0; i < array.length; i++) {
    console.log(i);
}

array.forEach(function (item) {
    console.log(item);

})

//let diffArray: [string, boolean] = ["mazli", true];
//console.log

//let diffArray: Array<string | number> = ["mark", 2, 2];  // igy az lesz h csak string es number lehet benne
// any-vel pedig barmilyen lehet a arrayben

//diffArray.splice(0, 1, "marks");

//let doubled: number[] = [1, 2, 3, 4, 5].map(function(i) {
//    return i * 2;
//})

//console.log(doubled);

let odds: number[] = [1, 2, 3, 4, 5].filter(function(item) {
    return item % 2 === 1;
})
console.log(odds);

let magic: number[] = [];

console.log(magic[-100]);


let arry1: number[] = [1, 2];
let arry2: number[] = [3, 4];

let arry3: number[] = [...arry1, ...arry2];
console.log(arry3);

// functions:

let numberToMultiply: number = 12;

let twice: number = numberToMultiply;
console.log(twice);

function printNumberToMake(inputNumber: number) {
    let doubledValue: number = inputNumber * 2;
    console.log(doubledValue)
}

printNumberToMake(1);

function multiplication(base: number, another: number):number {
    return base * another;
}

printNumberToMake();

console.log(multiplication();

//

