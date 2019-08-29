// Create a method that decrypts reversed-order.txt
// ugy vannak a sorok hogy legalul van a legelso sor, es igy tovabb
// a sorokat forditott sorrendben rakjuk bele egy string-be ujra

// NEM ARRAY-es listes feladat!!!!!! (string van benne)

'use strict';
export{}
declare function require(path: string): any;
const fs = require('fs');
let fileContent = fs.readFileSync('reversed-order.txt', 'utf-8'); 

function decrypt(content: string): string {
    let decryptedString: string = '';
    let contentArray: string[] = content.split('\n');
  
    for (let i: number = 0; i < contentArray.length; i++) { // goes through the lines
      decryptedString += contentArray[contentArray.length - 1 - i] + '\n';  //  per n kell a vegere h ujra soronkent legyen
    }                                                                       // ujra string lesz belole
    return decryptedString;
  }
  
  console.log(decrypt(fileContent));