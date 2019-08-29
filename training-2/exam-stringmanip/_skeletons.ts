// file-io skeleton

function FunctionName(filename: string): void {
  try {
    fs.readFileSync(filename, "utf-8");
  } catch {
    console.log("Unable to open");
  }

  let fileContent = fs.readFileSync(filename, "utf-8");
  let rows: string[] = fileContent.split(" ");

  for (let i = 0; i < rows.length; i++) {
    
  }

  console.log();
}


//file-io text read skeleton

'use strict';
export{}
declare function require(path: string): any;
const fs = require('fs');
let fileContent = fs.readFileSync('text.txt', 'utf-8');   // ez string-et csinal

//.................................................
//try-catch skeleton uj eszter
//.................................................
function readFile(filename: string): string {
  try {
      content = fs.readFileSync(filename, 'utf-8');
  } catch (e) {
      console.log('Unable to open');
      content = '';
  }
  return content;
}

//.................................................
//try-catch skeleton OLD
//.................................................

if (!fs.existsSync(text)) {
    throw Error('File does not exist');
}
try {
    fs.readFileSync(text, 'utf-8');
    throw ('Everything is cool')

} catch (err) {
    console.error(err.message);
}

// try catch easy version ..........................

try {
    let fileContent: string = fs.readFileSync('reversed-order.txt', 'utf-8');
    console.log(decrypt(fileContent));
  } catch (e) {
    console.log(e.message);
  }
  
// try catch easy version 2 ........................

  try {
    fs.readFileSync(filename, "utf8");
  } catch {
    console.log(`Cannot find studio ${filename}, please try again later.`);
  }  

//...........................................
//object with keys skeleton
//...........................................

function countChar(): {[k: string]: number} {} // egy object jon ki a functionbol
// a bal oldali ertek string, a jobb oldali ertek number. key string, value number.

//...........................................
//map skeleton (installalni is kell melle)
//...........................................