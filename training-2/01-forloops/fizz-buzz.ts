
// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

'use strict';
let egyik: string = 'Fizz';
let masik: string = 'Buzz';

for (let i: number = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(egyik + masik);
    } else if (i % 3 === 0) {
        console.log(egyik);
    } else if (i % 5 === 0) {
        console.log(masik);
    } else {
        console.log(i);
    }
}


