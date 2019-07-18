'use strict';

const fs = require('fs');

import { readContent, splitContent } from './read-content';

let addTodo = (fileName: string, args: string[]) => {
    let content: string;
    let contentArr: string[] = [];

    try {
        if (args[3] == undefined) {
            console.log('Unable to add: no task provided.');
            return;
        }
        // if (fs.existsSync(fileName)) {
        //     content = readContent(fileName);
        //     contentArr = splitContent(content);
        // }
        // contentArr.push(args[3]);
        if (!fs.existsSync(fileName) || readContent(fileName) == '') {
            fs.writeFileSync(fileName, args[3]);
        }
        else {
            fs.appendFileSync(fileName, '\n' + args[3]);
        }
        console.log('Added todo:', args[3]);
    }
    catch (error) {
        console.log('Error: unable to write into file.')
        return;
    }
}

export default addTodo;