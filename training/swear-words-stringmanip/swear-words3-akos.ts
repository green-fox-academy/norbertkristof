// Write a method which can read and parse a file containing not so family friendly text. 
// The method must remove all the given words from the file and return the amount of 
// the removed words.

"use strict";
export {};
declare function require(path: string): any;
const fs = require("fs");
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
//let searchDatabase: string = wordsToSearch.join();
let fileContent: string = fs.readFileSync("content.txt", "utf-8");
let wordArray: string[] = fileContent.toLowerCase().split(" ");
let result: string[] = wordArray.filter(f => wordsToSearch.includes(f)); // a filterhez kell function! f a parameter!

console.log(result);
console.log(result.length);
// function valami(f: string): boolean {
//     let isfASwearWord = wordsToSearch.includes(f);    // ezis ugyanaz csak mashogy leirva
//     return isfASwearWord;
// };

// let resutl = wordArray.filter(valami);

// let result3 = wordArray.filter(function(f) { return wordsToSearch.includes(f); })     // ezis ugyanaz csak mash
