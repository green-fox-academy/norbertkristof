'use strict'

import Animal from './animal'

export default class Cat extends Animal{
    
    constructor(ownerName: string, isHealthy: boolean, healCost: number = Math.floor(Math.random() * 7), name: string = 'cica') {
        super(ownerName, isHealthy, healCost, name);  /// ha ide irom be akkor beegetem
    }
}

let miau = new Cat('Mark', true);

console.log(miau);