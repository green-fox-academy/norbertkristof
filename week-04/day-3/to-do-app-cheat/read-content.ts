'use strict';

const fs = require('fs');


let readContent = (fileName: string): string => {
    try {
        return fs.readFileSync(fileName, 'utf-8');
    }
    catch (error) {
        console.log('Error: unable to access file.')
    }
}

let splitContent = (content: string): string[] => {
    return content.split('\n');
}


export { readContent, splitContent };