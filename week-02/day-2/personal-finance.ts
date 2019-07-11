'use strict';
/* We are going to represent our expenses in a list containing integers.
Create a list with the following items.
500, 1000, 1250, 175, 800 and 120
Create an application which solves the following problems.
How much did we spend?
Which was our greatest expense?
Which was our cheapest spending?
What was the average amount of our spendings? */

let list: number[] = [500, 1000, 1250, 175, 800, 120];

function howMuchDidWeSpendAndAverage() {
let sum: number = 0;
for (let index: number = 0; index < list.length; index++) {
    sum += list[index];
}
console.log('We spent: ' + sum);
console.log('The average amount of our spending was: ' + (sum / list.length));
}

function greatestExpense() {
    console.log('The greatest expense was: ' + Math.max(...list));
}

function cheapestSpending() {
    console.log('The cheapest spending was: ' + Math.min(...list));
}


function writeItAll() {
howMuchDidWeSpendAndAverage();
greatestExpense();
cheapestSpending();
}

writeItAll();