'use strict';

import test = require('tape');
import getUniqueNumbers from './unique3-szabi';

test('testing invalid input error handling', (t: any) => {
    let testInput: number[][];
    t.equals(getUniqueNumbers(testInput), undefined);
    t.equals(getUniqueNumbers([]), undefined);
    t.end();
});

test('testing main logic', (t: any) => {
    t.equals(getUniqueNumbers([[1, 1], [4, 2]]).toString(), [1, 4, 2].toString());
    t.equals(getUniqueNumbers([[4, 3, -1], [10, 2, 5], [-2, 3, 4]]).toString(), [4, 3, -1, 10, 2, 5, -2].toString());
    t.end();
});