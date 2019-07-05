// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

'use strict';

let abc: string[] = ["Arthur", "Boe", "Chloe"];
let def: string[] = [abc[2], abc[1], abc[0]];

console.log(def);

// alternate

let ddd: string[] = ["Arthur", "Boe", "Chloe"];
ddd[3] = ddd[0];
ddd[0] = ddd[2];
ddd.splice(2, 1);
console.log(ddd);