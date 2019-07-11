// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

'use strict';

export = {};

declare function require(path: string): any;

const fs: any = require('fs');

function readLogFile(fileName: string): string {
    try {
        return fs.readFileSync(fileName);
    } catch (error) {
        return '';
    }
}

let fileContent : string = readLogFile('log.txt');

function(createLinesBasedOnTextContent(fileContent));
    return fileContent.split('\n');

console.log(createLinesBasedOnTextContent(fileContent));