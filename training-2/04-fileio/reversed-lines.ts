// Create a method that decrypts reversed-lines.txt
// visszafele vannak irva a sorok / hablaty szoveg! Norbert Kristof helyett: fotsirK trebroN
'use strict';
export{}
declare function require(path: string): any;
const fs = require('fs');
let fileContent = fs.readFileSync('reversed-lines.txt', 'utf-8'); 

function decrypt(content: string): string {
    let decryptedString: string = '';
    let contentArray: string[] = content.split('\n');
    let tempString: string = '';

    for (let i: number = 0; i < contentArray.length; i++) { // goes through the lines
      tempString = '';
      for (let j: number = 0; j < contentArray[i].length; j++) { // goes throught the letters of the given line
        tempString += contentArray[i].charAt(contentArray[i].length - 1 - j);
      }
      decryptedString += tempString + '\n';
    }
    return decryptedString;
  }
  
console.log(decrypt(fileContent));