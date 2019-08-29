"use strict";

import test from "tape";
import uniqueNumbers from "./unique2";

test(t => {
  let testerMatrix: number[][] = [[1, 1], [4, 2]];
  let otherMatrix: number[][] = [[1, 4, 2]];
  let test2Matrix: number[][] = [[4, 3, -1], [10, 2, 5], [-2, 3, 4]];
  let other2Matrix: number[][] = [[4, 3, -1, 10, 2, 5, -2]];
  t.deepEqual(uniqueNumbers(testerMatrix), otherMatrix);
  t.deepEqual(uniqueNumbers(test2Matrix), other2Matrix);
  t.end();
});
