'use strict';

const fs = require('fs');

import { readContent, splitContent } from './read-content';
import { formatTodoString } from './check-todo';

let removeTodo = (fileName: string, args: string[]) => {
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
        else {
            console.log('Removed todo: ' + formatTodoString(contentArr[Number(args[3]) - 1]));
            contentArr.splice(Number(args[3]) - 1, 1);
            fs.writeFileSync(fileName, contentArr.join('\n'));
        }
    }
    catch (error) {
        console.log('Error: unable to access file.')
        return;
    }
}

export default removeTodo;