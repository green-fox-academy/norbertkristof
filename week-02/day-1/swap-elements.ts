// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

'use strict';

let abc: string[] = ["Arthur", "Boe", "Chloe"];
abc[3] = abc[0];
console.log(abc);
abc[0] = abc[2];
console.log(abc);
abc.splice(2, 1);
console.log(abc);
//abc[2] = abc[0];
//abc.shift();

// 
//

//console.log(abc[0], abc[1], abc[3]);  

console.log(abc);

//'use strict';
//let a: number = 123;
//let b: number = 526;
//let c: number = a;
//a = b;
//b = c;
//console.log(a);
//console.log(b);