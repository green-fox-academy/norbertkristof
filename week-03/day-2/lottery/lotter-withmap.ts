"use strict";
export{}
const fs = require("fs");
let content = fs.readFileSync("lottery.csv", "utf-8");
let rows: string[] = content.split("\r");
let lotteryNumberCounts: Map<number, number> = new Map();
for (let i = 0; i < rows.length; i++) {
 let columns: string[] = rows[i].split(";");
 for (let j = columns.length - 1; j > columns.length - 6; j--) {
   let index: number = Number.parseInt(columns[j]);
   if (lotteryNumberCounts.has(index)) {
     lotteryNumberCounts.set(index, lotteryNumberCounts.get(index) + 1);
   } else {
     lotteryNumberCounts.set(index, 1);
   }
 }
}
let fiveMostCommon: object = {};
for (let i = 0; i < 5; i++) {
 let maxCount: number = 0;
 let lotteryNumberForMaxCount: number = null;
 lotteryNumberCounts.forEach((count, lotteryNumber) => {
   if (count > maxCount /* && fiveMostCommon[lotteryNumber] === undefined */) {
     maxCount = count;
     lotteryNumberForMaxCount = lotteryNumber;
   }
 });
 fiveMostCommon[lotteryNumberForMaxCount] = maxCount;
 lotteryNumberCounts.delete(lotteryNumberForMaxCount);
}
console.log(fiveMostCommon);