'use strict';

import test = require('tape');
import uniqueAa from './matrix-unique';

test('testing invalid input error handling', (t: any) => {
    let testInput: number[][];
    t.equals(uniqueAa(testInput), undefined);
    t.equals(uniqueAa([]), undefined);
    t.end();
});

test('testing main logic', (t: any) => {
    t.equals(uniqueAa([[1, 1], [4, 2]]).toString(), [1, 4, 2].toString());
    t.equals(uniqueAa([[4, 3, -1], [10, 2, 5], [-2, 3, 4]]).toString(), [4, 3, -1, 10, 2, 5, -2].toString());
    t.end();
});