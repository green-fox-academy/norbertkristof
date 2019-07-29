// -  Create a variable named `integers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `integers` to the console*
// *hint: use a loop, console.log(integers) won't cut it
// -  bonus for using the correct built in array method

'use strict';

let integers: number[] = [4, 5, 6, 7];

for (let i: number = 0; i < integers.length; i++) {
    console.log(integers[i]);
}

// hi level alternate /w function

let integers2: number[] = [4, 5, 6, 7];
integers2.forEach(function (item) {
    console.log(item);
})