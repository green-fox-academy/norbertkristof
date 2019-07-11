/* Sharpie
Create Sharpie class
We should know about each sharpie their color (which should be a string), width (which will be a floating point number), 
inkAmount (another floating point number)
When creating one, we need to specify the color and the width
Every sharpie is created with a default 100 as inkAmount
We can use() the sharpie objects
which decreases inkAmount */

'use strict';

class Sharpie {
    color: string;
    width: number;
    inkAmount: number = 100;

    use() {
        return this.inkAmount--;
    }

    constructor(color: string, width: number, inkAmount: number) {
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount;
        // this.id = Cookie.lastId;
        // Cookie.lastId++;
    }
}

let redSharpie: Sharpie = new Sharpie('red', 10, 100);
let greenSharpie: Sharpie = new Sharpie('green', 50, 100);
let blueSharpie: Sharpie = new Sharpie('blue', 30, 100);

redSharpie.use();
greenSharpie.use();
blueSharpie.use();

console.log(redSharpie);
console.log(greenSharpie);
console.log(blueSharpie);

// myFirstCookie.bakeMe();
// console.log(Cookie.howAreYouToday('exceptional'));
// console.log(myFirstCookie);
// console.log(mySecondCookie);