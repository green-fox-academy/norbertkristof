// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console


// let aik: number[] = [3, 4, 5, 6, 7];
// let vao: number = 0;

//     for (let j: number = 0; j < aik.length ; j++) {     // ez itt nincs funkcioba rakva de ugyanaz
//     vao = vao + aik[j];
// }

// console.log(vao);
'use strict';

let aik: any[] = [3, 4, 5, 6, 'Magyar', 7];
let vao: number = 0;

function summa(input: any):any {
    for (let j: number = 0; j < input.length; j++) {
        if (isNaN(input[j])) {    /// itt azt nezi hogyha nem szam akkor menjen tovabb, any van megadva
            continue;
        }
        vao = vao + input[j];
    }
    return vao;
}

console.log(summa(aik));



