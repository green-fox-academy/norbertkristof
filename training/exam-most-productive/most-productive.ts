// Write a method which can read and parse a file containing information about movies. 
// The method must take one argument, which is the name of the film studio and return 
// the most productive year for the film studio.
// If we do not have any data about the studio, the function should return an error message.
// There's two example file:
// Marvel
// Paramount
"use strict";
export = {};
declare function require(a: string): any;
const fs = require("fs");
function getTheMostProductiveYear(filename: string): number {
 try {
   fs.readFileSync(filename, "utf8");
 } catch {
   console.log(`Cannot find studio ${filename}, please try again later.`);
 }
 let content = fs.readFileSync(filename, "utf-8");
 let contentToArray: string[] = content.split(",");
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
console.log(getTheMostProductiveYear("marvel.csv"));
console.log(getTheMostProductiveYear("paramount.csv"));
console.log(getTheMostProductiveYear("ghibli.csv"));

// let fiveMostCommon: object = {};
// for (let i = 0; i < 5; i++) {
//  let maxCount: number = 0;
//  let lotteryNumberForMaxCount: number = null;
//  weeklyFeedback.forEach((count, lotteryNumber) => {
//    if (count > maxCount /* && fiveMostCommon[lotteryNumber] === undefined */) {
//      maxCount = count;
//      lotteryNumberForMaxCount = lotteryNumber;
//    }
//  });
//  fiveMostCommon[lotteryNumberForMaxCount] = maxCount;
//  weeklyFeedback.delete(lotteryNumberForMaxCount);
// }