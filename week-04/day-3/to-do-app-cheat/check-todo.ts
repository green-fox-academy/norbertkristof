'use strict';

const fs = require('fs');

import { readContent, splitContent } from './read-content';

let checkTodo = (fileName: string, args: string[]) => {
    let content: string;
    let contentArr: string[] = [];

    try {
        if (fs.existsSync(fileName)) {
            content = readContent(fileName);
            contentArr = splitContent(content);
        }
        else {
            console.log('Error: todo file doesn\'t exist.');
            return;
        }

        if (args[3] == undefined) {
            console.log('Error: please provide todo index.');
            return;
        }
        else if (isNaN(Number(args[3]))) {
            console.log('Error: index is not a number.');
            return;
        }
        else if (contentArr[Number(args[3]) - 1] == undefined) {
            console.log('Error: index is out of bound.');
            return;
        }
        else if ((contentArr[Number(args[3]) - 1]).indexOf('$checked$') != -1) {
            console.log('Task already completed!');
            return;
        }
        else {
            console.log('Checking todo: ' + contentArr[Number(args[3]) - 1]);
            contentArr[Number(args[3]) - 1] += '$checked$';
            fs.writeFileSync(fileName, contentArr.join('\n'));
        }
    }
    catch (error) {
        console.log('Error: unable to access file.')
        return;
    }
}

let formatTodoString = (input: string): string => {
    if (input.indexOf('$checked$') != -1) {
        return input.slice(0, input.indexOf('$checked$'));
    }
    else {
        return input;
    }
}

export { checkTodo, formatTodoString };