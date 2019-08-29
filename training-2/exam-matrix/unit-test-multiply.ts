'use strict'

import test = require('tape');
import doubleUp from './matrix-multiply';
//import myMatrixV1 from './matrix-greatest-value';  // ezeket csak akkor kell importalni ha a kikommentelt valtozatot
//import myMatrixV2 from './matrix-greatest-value';  // hasznalom, amugy nem kell

// test('matrix1 and matrix2 same size', t => {
//     let actual = myMatrixV1.length === myMatrixV2.length;   // ez david teszt verzioja, rovidebb es
//     let expected = true;                                    // be kell hozza importalni az array-eket is

//     t.equal(actual, expected);
//     t.end();
// })

test(t => {
    let testerMatrix: number[][] = [
        [1, 3, 6, 2],
        [7, 5, 6, 1],
        [3, 3, 1, 5],
        [9, 0, 5, 3]
    ]
    let output: number[][] = [
        [1,  3,  12, 4],
        [14, 10, 6,  2],
        [3,  3,  1,  5],
        [18, 0,  10, 6]
    ]

    t.deepEqual(doubleUp(testerMatrix), output);

    t.end()

})

test(t => {
    let testerMatrix: number[][] = [
        [2, 1],
        [4, 1]
    ]
    let output: number[][] = [
        [4, 1],
        [4, 2]
    ]

    t.deepEqual(doubleUp(testerMatrix), output);

    t.end()

})