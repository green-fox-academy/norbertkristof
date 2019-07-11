/*
Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!"
*/
'use strict';

class PostIt {
    backgroundColor: string;
    textOnIt: string;
    textColor: string;

    constructor(backgroundColor: string, textOnIt: string, textColor: string) {
        this.backgroundColor = backgroundColor;
        this.textOnIt = textOnIt;
        this.textColor = textColor;
    }
}

let myFirstPostIt: PostIt = new PostIt('orange', 'Idea 1', 'blue');
let mySecondPostIt: PostIt = new PostIt('pink', 'Awesome', 'black');
let myThirdPostIt: PostIt = new PostIt('yellow', 'Superb', 'green');

console.log(myFirstPostIt);
console.log(mySecondPostIt);
console.log(myThirdPostIt);