'use strict'

import Animal from './animal'

export default class Dog extends Animal{

                                                                  //random number between 1 and 8
    constructor(ownerName: string, isHealthy: boolean, healCost: number = (Math.floor(Math.random() * 8) + 1), name: string = 'kutya') {
        super(ownerName, isHealthy, healCost, name);  /// ha ide irom be akkor beegetem
    }
}
// let Zsambek = new Dog();

// console.log(Zsambek);
// Zsambek.healCost;
