// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

'use strict';

let animals: string[] = ["koal", "pand", "zebr"];

// with loooooooop

for (let index: number = 0; index < animals.length; index++) {
    animals[index] = animals[index] + 'a';
    console.log(animals[index]);
}

// with map function

console.log(animals.map(function (stuffenzi) {
    stuffenzi = stuffenzi + 'a';
    return stuffenzi;
}))