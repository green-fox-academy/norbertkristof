'use strict';

let a: number = 0;
let num: number = 5;
let sum: number = 0;

while (a <= num) {
    sum = sum + a;
    a++;
}

console.log('Sum of', num, '=', sum);
console.log('Average of', num, '=', sum/num);

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3