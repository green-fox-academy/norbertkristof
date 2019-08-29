// Write a function that takes a filename as a parameter. Return the 2 most common characters and their occurrences 
// in the file's content.
// If the file does not exist throw an exception with the following message: "File does not exist!"
// {
//     "e": 6,
//     "l": 4
//   }

'use strict';

const fs = require('fs');

let content;
function readFile(fileName: string) {
    try {
        content = fs.readfFileSync(fileName, 'utf-8');
    } catch (e) {
        console.log('valma nemjo')
    }
    return content;
}

let fileContent: string = readFile('chars');
let charArray: string[] = Array.from(fileContent);
let charArray2: string[] = fileContent.split('');

function countChars(content: string): object {
    let chars: string[] = Array.from(content);
    let counted: object = {};
    for(let i: number = 0; i < chars.length; i++) {
        let 
    }
}



let pl = { a: 1, b: 2 };







