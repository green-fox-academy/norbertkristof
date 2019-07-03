'use strict';

//export : {};

let list: number[] = [];

let single: string = 'single quotes';

let double: string = "double quotes";

let backTick: string = 'Today is ${100 ** 2) -1}';

console.log(single, double, backTick);

console.log(single.length);

console.log(single.toUpperCase());

function toUpperCaseAtIndex(text: string, index: number): string {
    let prefix: string = text.slice(0, index);
    let replaceUpperCase: string = text.charAt(index).toUpperCase();
    let suffix: string = text.slice(index + 1);
    return prefix.concat(replaceUpperCase).concat(suffix);
}

console.log(toUpperCaseAtIndex("appletree", 0));

let greeting: string = 'hello create class';

let greetingTheRightWay: string = greeting.replace(/create/g, 'Create');

let newArray: string = toUpperCaseAtIndex("appletree", 0).split('');
let lettersOfWorld: string[] = 'hello create class'.split('');
console.log(lettersOfWord);