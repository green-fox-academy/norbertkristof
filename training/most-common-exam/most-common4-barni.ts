// Write a function that takes a filename as a parameter. Return the 2 most common characters and their 
// occurrences in the file's content.
// If the file does not exist throw an exception with the following message: "File does not exist!"

'use strict';
export{}
declare function require(path: string): any;
const fs = require('fs');
let fileContent = fs.readFileSync('countchar.txt', 'utf-8');

function countChar(): {[k: string]: number} {
  let charArray: string[] = Array.from(fileContent);
  let counted: {[k: string]: number} = {};                 // ez nekem nem fut sima object-el, meg kell adni h string a key es number a property
  for (let i: number = 0; i <= charArray.length; i++) {
      let currentChar: string = charArray[i];
      if (!counted[currentChar]) {
          counted[currentChar] = 1;
      } else {
          counted[currentChar] = counted[currentChar] + 1
      }
   }
   return counted;
}

let counted: {[k: string]: number} = countChar();

let nMaxNumbers: {[k: string]: number} = {}; 
for (let i = 0; i < 2; i++) {
  let maxCount: number = 0; //Number.NEGATIVE_INFINITY;
  let letterForMaxCount: string;
   for (let key in countChar) {
     if (countChar()[key] > maxCount) {
      maxCount = countChar()[key];
      letterForMaxCount = key;
    }
  }
  nMaxNumbers[letterForMaxCount] = maxCount;
​ }

console.log(nMaxNumbers);

console.log(countChar());











// 'use strict';
// export{}
// const fs = require('fs');
// ​
// let fileContent = fs.readFileSync('countchar.txt', 'utf-8');
// let charArray: string[] = Array.from(fileContent)
// let object = {};
// //adding new object: object['akos'] = 100;
// //list keys: Object.keys(object);
// // console.log(object['a'])
// ​
// function readFile(filename: string)
// try {
//     fileContent = fs.readFileSync('countchar.txt', 'utf-8');
//     let charArray: string[] = Array.from(fileContent);
// ​
// }
// catch (e) {
//     console.log('The file does not exist.');
// }
// return content 
// }
// function countChar(content: string[]): object {
//     let charArray = Array.from(fileContent);
//     content = charArray.split('').join('').toLowerCase() 
//     let counted: object = {};
//     for (let i: number = 0; i <= charArray.length; i++) {
//         let currentChar: string = charArray[i];
//         if (!counted[currentChar]) {
//             counted[currentChar] = 1;
//         } else {
//             counted[currentChar] = counted[currentChar] + 1
//         }
//         return counted
//     }
// }