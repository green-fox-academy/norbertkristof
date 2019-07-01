let strArr1: string[] = ['Hello', 'world'];
let strArr2: Array<string> = ['Hello', 'world'];

let anyArr: any[] = ['Hello', 10, true];
let myTuple: [string, number] = ["Hi", 10];
console.log(myTuple[0]);
console.log(myTuple[1]);

//myTuple[2] = 100;
//console.log(myTuple[2]);
//ezek valamiert nem mukodnek nekem, de a videoban ment

let myArray = [];
myArray[0] = 25;
console.log(myArray);

myArray[1] = 35;
myArray[2] = 'hello';  ///valamier ha ele irtam h string nem volt jo
myArray[3] = true;
console.log(myArray);

let myArray2 = [10, 20, "hi", false];
console.log(myArray2);
let myArray3 = new Array (5);
console.log(myArray3);

myArray2.length;   // methods
console.log(myArray2.length);

myArray2.sort();   // methods
console.log(myArray2.sort);

myArray2.reverse();  // methods vaamier nem megy de kiirja a metodot de nem csinalja meg
console.log(myArray2.reverse);