// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

'use strict';

let ai: number[] = [3, 4, 5, 6, 7];

function sum(input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total = total + Number(input[i]);
    }
    return total;
}
console.log(sum(ai));