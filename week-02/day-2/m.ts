'use strict';

let bigArray: string[] = ['Lipcsei Tibor', 'Dudas Maria', 'Kristof Richard', 'Kristof Norbert'];

let i: number = 0;
while (bigArray[i]) {
    console.log(bigArray[i]);
    i++;
}

console.log(bigArray.sort());

console.log(bigArray);

for (let j: number = 0; j < bigArray.length; j++) {
    console.log(bigArray[j]);
}
console.log(bigArray.reverse());