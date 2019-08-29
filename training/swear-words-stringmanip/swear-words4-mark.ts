"use strict";
​
declare function require(a: string): any;
​
export = {};
​
const fs = require("fs");
​
let content: string = fs.readFileSync("content.txt", "utf-8");
console.log(content);
​
const swearWords: string[] = [
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
​
const countCsunyaWords = (text: string, swearWords: string[]): number => {
  const words: string[] = text.split(" ");
  let notSoNiceWords: string[] = [];
  let niceWords: string[] = [];
​
  for (let word of words) {
    let withOutLastChar: string = word.substring(0, word.length - 1);
    if (swearWords.indexOf(word) >= 0) {
      notSoNiceWords.push(word);
    } else if (swearWords.indexOf(withOutLastChar) >= 0) {
      notSoNiceWords.push(withOutLastChar);
      niceWords.push(word.charAt(word.length - 1));
    } else {
      niceWords.push(word);
    }
  }
  fs.writeFileSync("b.txt", niceWords.join(" "));
  return notSoNiceWords.length;
};
​
console.log(countCsunyaWords(content, swearWords));