'use strict';

const fs = require('fs');

import { readContent, splitContent } from './read-content';
import { formatTodoString } from './check-todo';

let listTodos = (fileName: string) => {
    let content: string;
    let contentArr: string[] = [];

    if (fs.existsSync(fileName)) {
        content = readContent(fileName);
        contentArr = splitContent(content);
    }

    if (contentArr.length == 0) {
        console.log('No todos for today! :)');
    }
    else {
        for (let i = 0; i < contentArr.length; i++) {
            let itemString: string = '';
            itemString += i + 1 + '. [';
            if (contentArr[i].indexOf('$checked$') != -1) {
                itemString += 'x] ' + formatTodoString(contentArr[i]);
            }
            else {
                itemString += ' ] ' + contentArr[i];
            }
            console.log(itemString);
        }
    }
}

export default listTodos;
