'use strict'

import test = require('tape');
import greatestValue from './matrix-greatest-value';
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
        [-1, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
    ]

    let test2Matrix: number[][] = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
    ]
    let output: number[][] = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
    ]

    t.deepEqual(greatestValue(testerMatrix,test2Matrix), output);

    t.end()

})

test(t => {
    let testerMatrix: number[][] = [
        [2, 1],
        [0, 1]
    ]
    let test2Matrix: number[][] = [
        [0, 3],
        [-1, 1]
    ]
    let output: number[][] = [
        [2, 3],
        [0, 1]
    ]

    t.deepEqual(greatestValue(testerMatrix, test2Matrix), output);

    t.end()

})