'use strict';
// vizsgalo trial exam - symetric
var matrix = [
    [1, 0, 1],
    [0, 2, 2],
    [1, 2, 5]
];
function isSymmetric(matrix) {
    var n = matrix.length;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (matrix[i][j] == matrix[j][i]) { }
            else {
                return false;
            }
        }
    }
    return true;
}
isSymmetric(matrix);
console.log(isSymmetric([
    [3]
]));
//# sourceMappingURL=matric_symetric.js.map