'use strict';
// rotate matrix 90fok
var mx = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
function rotate(matrix) {
    var rowNum = matrix.length;
    var colNum = matrix[0].length;
    var x = [];
    for (var j = 0; j < colNum; j++) {
        var row = [];
        for (var i = 0; i < rowNum; i++) {
            row.push(matrix[i][j]);
        }
        x.push(row.reverse());
    }
    return x;
}
function printmx(mx) {
    mx.forEach(function (row) {
        console.log(row);
    });
}
printmx(rotate(mx));
console.table(rotate(mx));
//# sourceMappingURL=matrix.js.map