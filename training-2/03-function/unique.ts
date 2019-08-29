//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once
'use strict';
function uniqueAa(arr: number[]):number[] {
    let uniqueArr: number[] = [];
    
    for (let i: number = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(arr[i]) == -1) { // -1 indexOf beepitett ertek, ilyen ELEM NINCS azt jelenti,
            uniqueArr.push(arr[i]);            // vagiy a feltoltogetett array-emben ha mar van, akkor nem pusholja bele.
        }
    }
    
    // .............................................
    // ugyanez a feladat forEach-el for loop helyett
    // .............................................
    
    // arr.forEach(function (value) {
    //   if (uniqueArr.indexOf(value) == -1) {    // -1 azt jelenti hogyha nincs ilyen elem a listaban. indexOf beepitett ertek.
    //     uniqueArr.push(value);  
    //   }
    // });
    return uniqueArr;
}

let macskaAlom: number[] = [1, 11, 34, 11, 52, 61, 1, 34];
console.log(uniqueAa(macskaAlom));
//  should print: `[1, 11, 34, 52, 61]`