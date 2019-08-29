'use strict';

const getUniqueNumbers = (inputMatrix: number[][]): number[] => {
    let listOfUniques: number[] = [];

    if (inputMatrix == undefined) {
        console.log('Please provide input matrix.')
        return undefined;
    }
    else if (inputMatrix.length == 0) {
        console.log('Please provide non-empty matrix.')
        return undefined;
    }
    else {
        for (let i: number = 0; i < inputMatrix.length; i++) {
            for (let j: number = 0; j < inputMatrix[i].length; j++) {
                if (listOfUniques.indexOf(inputMatrix[i][j]) == -1) listOfUniques.push(inputMatrix[i][j]);
            }
        }
    }
    return listOfUniques;
}


export default getUniqueNumbers;