'use strict';

import Animal from './animal';

export default class Mammal extends Animal {
    furryOrNot: boolean;
    numberOfLegs: number;

    constructor(name: string = 'default mammal name', age: number = 0, sex: string = 'unknown',
        district: string = 'Mammal district', furry?: boolean, numoflegs?: number) {
        super(name, age, sex, district);
        this.furryOrNot = furry;
        this.numberOfLegs = numoflegs;
    }

    breed(): string {
        return 'birthing';
    }

    makeSound(): string {
        return 'Moo';
    }
}