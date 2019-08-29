// Write a method which can read and parse a file containing not so family friendly text. 
// The method must remove all the given words from the file and return the amount of 
// the removed words.
// ==> hany darab swear word van a fileban, szamolja meg
// ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt']
// Output
// 17
// ==> lerakom lowercase-be, es splittelem space-enkent
'use strict';
export{}
declare function require(path: string): any;
const fs = require('fs');
let fileContent = fs.readFileSync('swear-words.txt', 'utf-8');

let wordsToSearch: string[] = [
    "fuck",
    "bloody",
    "cock",
    "shit",
    "fucker",
    "fuckstick",
    "asshole",
    "dick",
    "piss",
    "cunt"
  ];
  
let wordArray: string[] = fileContent.toLowerCase().split(" ");
let result: string[] = wordArray.filter(f => wordsToSearch.includes(f)); // a filterhez kell function! f a parameter!
  
console.log(result);
console.log(result.length);