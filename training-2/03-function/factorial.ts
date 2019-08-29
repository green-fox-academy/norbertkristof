// -  Create a function called `factorio`
//    that returns it's input's factorial

'use strict';

function factorio(input: number):number {
        
        let factovako: number = 1;
        for (let i: number = 1; i <= input; i++) {
            factovako = factovako * i;
        }
        return factovako;
}

console.log(factorio(4));