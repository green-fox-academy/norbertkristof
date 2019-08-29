// Write a function that takes a filename as a parameter. Return the 2 most common characters and their occurrences 
// in the file's content.
// If the file does not exist throw an exception with the following message: "File does not exist!"
// {
//     "e": 6,
//     "l": 4
//   }

'use strict';
declare function require(path : string) : any;
//export {};

const fs = require('fs');

let text: string = 'countchar.txt';
let content: string;
let textLines: string[] = [];

if (!fs.existsSync(text)) {
    throw Error('File does not exist');
}

try {
    content = fs.readFileSync(text, 'utf-8');

} catch (err) {
    console.error(err.message);
}

function mostCommonChar () {

}

let numberOfE = (text: string): number => {
    let numberOfGetE: number = 0;
    for (let i = 0; i < content.length; i++) {
        if (content[i] === 'e') {
            numberOfGetE++;
        }
    }
    return numberOfGetE;
}

let numberOfL = (text2: string): number => {
    let numberOfGetL: number = 0;
    for (let i = 0; i < content.length; i++) {
        if (content[i].indexOf('l') != -1) {
            numberOfGetL++;
        }
    }
    return numberOfGetL;
}

console.log('e: ' + numberOfE(content));
console.log('l: ' + numberOfL(content));