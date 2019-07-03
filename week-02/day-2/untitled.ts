'use strict';

let list: number[] = [1, 3, 4, 1, 5];

let listWithCubes: number[] = list.map(function (element) {
    return element ** 3;
})

console.log(listWithCubes);

function cubeNumbers(numbers: number[]): number[] {
    let listOfCUbe: number[] = numbers.map(function (element) {
        return element ** 3;

    })
    return listOfCUbe;
}
console.log(cubeNumbers(list));