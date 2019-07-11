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

function HowMuchWeSpend() {
    let sum: number = 0;
    for (let i: number = 0; i < list.length; i++) {
        sum = sum + list[i];
    }
    console.log('All our Spending: ', sum);
    console.log('The average amount of spending: ', sum / list.length);
}

function GreatestExpense() {
    console.log('Out greatest expense was: ', Math.max(...list));

}

function CheapestSpending() {
    console.log('Our Cheapest spending was: ', Math.min(...list));
}

function writeItAll() {
    HowMuchWeSpend();
    GreatestExpense();
    CheapestSpending();
    }
    
    writeItAll();