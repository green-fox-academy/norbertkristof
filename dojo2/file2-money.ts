'use strict';

let moneyNumber: number = 17;
let stringArray: string[] = ['null', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let stringArray2: string[] = ['null', 'null2', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

let moneySplit: string[] = moneyNumber.toString().split("");

function numberToText(inputNumber: number){
    if(moneyNumber<20) {
    console.log(stringArray[inputNumber]);
    } else if(moneyNumber<100) {
    console.log(stringArray)
    
    }
}

numberToText(20);