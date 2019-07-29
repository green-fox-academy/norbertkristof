'use strict';
declare function require(path: string): any;
export {};
const fs = require('fs');
let contentOfLottery = fs.readFileSync('lottery.csv', 'utf-8');
let content: string[] = contentOfLottery.split('\n');
let lotteryNumbers: number[] = [];
for (let i = 0; i < content.length; i++) {
   let eachnumber = content[i].slice(-14).split(';').map(function(item) {
       return parseInt(item, 10);
   });;
   for (let j = 0; j < eachnumber.length; j++) {
   lotteryNumbers.push(eachnumber[j]);
   }
}
function countLettersIntoMap(numbers: any): any {
   let myMap = new Map();
   for (let i: number = 0; i < numbers.length; i++) {
     if (myMap.has(numbers[i])) {
       let saveOrigNumber: number = myMap.get(numbers[i]);
       myMap.delete(numbers[i]);
       myMap.set(numbers[i], saveOrigNumber + 1);
     } else {
       myMap.set(numbers[i], 1);
     }
   }
   return myMap;
 }
 console.log(countLettersIntoMap(lotteryNumbers));