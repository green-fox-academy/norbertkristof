'use strict';

import { greaterMatrix } from "./matrix-csigas";

import test from "tape";


//first case

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

    t.deepEqual(greaterMatrix(testerMatrix,test2Matrix), output);

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

    t.deepEqual(greaterMatrix(testerMatrix, test2Matrix), output);

    t.end()

})