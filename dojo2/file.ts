'use strict';

let string1: string = null as unknown as string;

let string2: string = "rich-chosen goofy cult";

function parseStringLettersToIncreasingOrder(inputText: string){

    return inputText.toLowerCase()
            .split('')
            .filter(function(element){
                return (element !== " " && element !== "," && element !== "-");
            })
            .sort();
}

export default function halalFolyoja(string1: string, string2: string): boolean {
    if(!string1 || !string2) {
        return false
    }

    let string1Array: string[] = parseStringLettersToIncreasingOrder(string1);
    let string2Array: string[] = parseStringLettersToIncreasingOrder(string2);
    
    console.log(string1Array);
    console.log(string2Array);

    let bumszli: boolean = true;
    for (let i: number = 0; i < string1Array.length; i++) {
        if(string1Array[i].toLowerCase() === string2Array[i].toLowerCase()) {
            continue;
        } else {
            bumszli = false;
        }
    } 
    return bumszli;
}

    console.log(halalFolyoja(string1, string2));