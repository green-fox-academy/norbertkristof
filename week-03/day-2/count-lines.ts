// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strict';

declare function require(path: string): any;
export { };

const fs = require('fs');

function fileAsString(filename: string): void {
    let content = fs.readFileSync(filename, 'utf-8');
    console.log(content);
    let lines: number = 0;
    for (let i: number = 0; i < content.length; i++) {
        if (content[i] === '\n') {
            lines += 1;
        }
    }
    console.log('number of lines in file: ' + lines);
}
try {
    fileAsString('my-file.txt');
}
catch {
    console.log(0);
}