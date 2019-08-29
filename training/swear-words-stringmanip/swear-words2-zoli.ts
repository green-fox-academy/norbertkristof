// "use strict";
// export {};
// // Write a method which can read and parse a file containing not so family friendly text.
// // The method must remove all the given words from the file and return the amount of the removed words.
​
// declare function require(path: string): any;
// const fs = require("fs");
// let swearWords = (fileName: string) => {
//   let sWords = fs.readFileSync(fileName, "utf-8");
//   let sWordsTosplit = sWords.split(" ");
//   return sWordsTosplit;
// };
// function filtering ((swearWords):string[] {
// let sweArray:string [] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt']
// for( let i: number= 0; i<sWordsTosplit.length;i++ ){
//     for(let j:number =0; j<sweArray.length; j++){
​
//     }
// if(swearWords[])
// }
// }
​
"use strict";
export {};
// Write a method which can read and parse a file containing not so family friendly text.
// The method must remove all the given words from the file and return the amount of the removed words.
declare function require(path: string): any;
const fs = require("fs");
function swearWords(fileName: string) {
  let sWords = fs.readFileSync(fileName, "utf-8");
  let sWordsTosplit = sWords.split(" ");
  filtering(sWordsTosplit);
  console.log(sWordsTosplit);
  return sWordsTosplit;
}
function filtering(swearWords: string[]) {
  let sweArray: string[] = [
    "fuck",
    "bloody",
    "Cock",
    "shit",
    "fucker",
    "fuckstick",
    "asshole",
    "dick",
    "piss",
    "cunt"
  ];
  let swearing: string[] = [];
  for (let i: number = 0; i < swearWords.length; i++) {
    for (let j: number = 0; j < sweArray.length; j++) {
      if (swearWords[i] === sweArray[j]) {
        let removed: any = swearWords.splice(
          swearWords.indexOf(sweArray[j]),
          1
        );
        swearing.push(removed);
      }
    }
  }
  //console.log(swearing.length);
  //console.log(swearing);
  return swearWords;
}
//swearWords("blabla.txt");
console.log(swearWords("content.txt"));
​










// function filtering(swearWords: string[]) {
//   let sweArray: string[] = [
//     "fuck",
//     "fuck.",
//     "bloody",
//     "Cock",
//     "shit",
//     "shit.",
//     "fucker",
//     "fuckstick",
//     "asshole",
//     "dick",
//     "piss",
//     "cunt"
//   ];
//   for (let i: number = 0; i < swearWords.length; i++) {
//     if (sweArray.includes(swearWords[i])) {
//       swearWords.splice(swearWords.indexOf(swearWords[i]), 1);
//     }
//   }
//   return swearWords;
// }
// //swearWords("context.txt");
// console.log(swearWords("context.txt"));