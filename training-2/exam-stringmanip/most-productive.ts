// Write a method which can read and parse a file containing information about movies. 
// The method must take one argument, which is the name of the film studio and return 
// the most productive year for the film studio.
// If we do not have any data about the studio, the function should return an error message.
// Example 1
// Input
// marvel
// Output
// 2017                               // itt jelen pillanatban miutan kivagtuk vesszonkent a reszeket a sorokbol
//                                    // minden masodik eleme az uj array-nek az evszam , vagyis minden masodik elemet
// Example 2                          // filterezem meg..
// Input                            
// ghibli                             // MAP-el van es nem indul el nem mukodik!
// Output
// Cannot find studio ghibli, please try again later.

'use strict';
export{}
declare function require(path: string): any;
const fs = require('fs');
let fileContent = fs.readFileSync('most-productive.csv', 'utf-8');

function getTheMostProductiveYear(filename: string): number {

let contentToArray: string[] = filename.split(",");
 let mostProductiveYears: Map<number, number> = new Map();
 for (let i = 0; i < contentToArray.length; i++) {
   if (i % 2 === 1) {
     let index: number = Number.parseInt(contentToArray[i]);
     if (mostProductiveYears.has(index)) {
       mostProductiveYears.set(index, mostProductiveYears.get(index) + 1);
     } else {
       mostProductiveYears.set(index, 1);
     }
   }
 }
 let maxCount: number = 0;
 let theYearForMaxCount: number;
 mostProductiveYears.forEach((count, year) => {
   if (count > maxCount) {
     maxCount = count;
     theYearForMaxCount = year;
   }
 });
 return theYearForMaxCount;
}

console.log(getTheMostProductiveYear('most-productive.csv'));
//console.log(getTheMostProductiveYear("paramount.csv"));
//console.log(getTheMostProductiveYear("ghibli.csv"));