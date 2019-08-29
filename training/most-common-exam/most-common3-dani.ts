"use strict";
export {}
declare function require(path: string): any;
const fs = require("fs");
const content: string = fs.readFileSync("countchar.txt", "utf-8");
let contentToArray: string[] = content.split("");
let letterCounts: Map<string, number> = new Map();
contentToArray.forEach(char => {
 if (letterCounts.has(char)) {
   letterCounts.set(char, letterCounts.get(char) + 1);
 } else {
   letterCounts.set(char, 1);
 }
});
console.log(letterCounts);
let nMaxNumbers: object = {};
for (let i = 0; i < 2; i++) {
 let maxCount: number = Number.NEGATIVE_INFINITY;
 let letterForMaxCount: string = null;
 letterCounts.forEach((count, letter) => {
   if (count > maxCount) {
     maxCount = count;
     letterForMaxCount = letter;
   }
 });
 nMaxNumbers[letterForMaxCount] = maxCount;
 letterCounts.delete(letterForMaxCount);
}
console.log(nMaxNumbers);
console.log(letterCounts);


