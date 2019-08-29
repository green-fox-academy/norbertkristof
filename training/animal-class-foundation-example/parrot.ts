'use strict'

import Animal from './animal'

export default class Parrot extends Animal{

                                                     //random number between 4 and 10
    constructor(ownerName: string, isHealthy: boolean, healCost: number = (Math.floor(Math.random() * 6) + 4), name: string = 'papagaly') {
        super(ownerName, isHealthy, healCost, name);  /// ha ide irom be akkor beegetem
    }
}

// let Zsambek = new Parrot();

// console.log(Zsambek);
// Zsambek.healCost;

