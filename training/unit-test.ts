'use strict';

import  test  from 'tape'
import  doubleUp  from './matrix-multiply-items-last'

// doubleUp a function neve a masik file-bol, amit export default-olni kell mielott behuzom ide!

//TEST CASES ==== unit testinget jelenti!!!!
// npm init
// npm install tape --save-dev
// npm install -D @types/tape
test(t => {
    let testerMatrix: number[][] = [   //bemenet
        [1, 3, 6, 2],
        [7, 5, 6, 1],
        [3, 3, 1, 5],
        [9, 0, 5, 3]
    ]
    let otherMatrix: number[][] = [    //kimenet
        [1, 3, 12, 4],
        [14, 10, 6, 2],
        [3, 3, 1, 5],
        [18, 0, 10, 6]
    ]
    let test2Matrix : number [][] = [[1,2],[1,2,3,4]]  // irt ide meg 1 test case-t h ezen is tesztelje (mas test case) mas ertekek
    let other2Matrix: number [][] = [[1,4],[2,2,6,4]]
    t.deepEqual(doubleUp(testerMatrix), otherMatrix); // input, es az output
    t.deepEqual(doubleUp(test2Matrix), other2Matrix);
    t.end()
});