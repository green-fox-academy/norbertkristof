// Write a method which can read and parse a file containing not so family friendly text.
// The method must remove all the given words from the file and return the amount of the
// removed words.

// Input
// ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt']

// Output
// 17

"use strict";
declare function require(path: string): any;
const fs = require("fs");
let sourceFile: string = "content.txt";
let content: string;

if (!fs.existsSync(sourceFile)) {
  throw Error("File does not exist");
}
try {
  content = fs.readFileSync(sourceFile, "utf-8");
} catch (err) {
  console.error(err.message);
}
//let textLines: string[] = Array.from(content);
let textLines: string[] = content.split(" ");
console.log(textLines);


