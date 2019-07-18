'use strict';

const fs = require('fs');

const args: string[] = process.argv;
const fileName: string = 'todoList.txt'

import printUsage from './print-usage';
import listTodos from './list-todos';
import addTodo from './add-todo';
import removeTodo from './remove-todo';
import { checkTodo } from './check-todo';

let mainProcess = () => {
    if (args.length == 2) {
        printUsage();
    }
    else if (args[2] == '-l') {
        listTodos(fileName);
    }
    else if (args[2] == '-a') {
        addTodo(fileName, args);
    }
    else if (args[2] == '-r') {
        removeTodo(fileName, args);
    }
    else if (args[2] == '-c') {
        checkTodo(fileName, args);
    }
    else {
        console.log('Error: unsupported argument.\n');
        printUsage();
    }
}

mainProcess();