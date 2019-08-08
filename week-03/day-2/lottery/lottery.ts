// Create a method that find the 5 most common lottery numbers in lottery.csv
'use strict';
//declare function require(path: string): any;
export {};
const fs = require("fs");
​
let content = fs.readFileSync("lottery.csv", "utf-8");
let rows: string[] = content.split("\r");
let lotteryNumberCounts: {[k:number]:number} = {};
​
for (let i = 0; i < rows.length; i++) {
  let columns: string[] = rows[i].split(";");
  for (let j = columns.length - 1; j > columns.length - 6; j--) {
    let index: number = Number.parseInt(columns[j]);
    if (lotteryNumberCounts[index]) {
      lotteryNumberCounts[index]++;
    } else {
      lotteryNumberCounts[index]= 1;
    }
  }
}
​
let fiveMostCommon: {[k:number]:number} = {};
for (let i = 0; i < 5; i++) {
  let maxCount: number = 0;
  let lotteryNumberForMaxCount: number = 0;
 for (let key in lotteryNumberCounts) {
    if (lotteryNumberCounts[key] > maxCount && fiveMostCommon[key] === undefined) {
      maxCount = lotteryNumberCounts[key];
      lotteryNumberForMaxCount = Number(key);
    }
    console.log(key);
  }
  fiveMostCommon[lotteryNumberForMaxCount] = maxCount;
  //lotteryNumberCounts.delete(lotteryNumberForMaxCount); */
}
console.log(fiveMostCommon);

