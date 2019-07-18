'use strict';

import Animal from './animal';

export default class Mammal extends Animal {
    canFly: boolean;
    numberOfWings: number;

    constructor(name: string = 'default bird name', age: number = 0, sex: string = 'unknown',
        district: string = 'Avian district', canfly?: boolean, numofwings?: number) {
        super(name, age, sex, district);
        this.canFly = canfly;
        this.numberOfWings = numofwings;
    }

    breed(): string {
        return 'laying eggs';
    }

    makeSound(): string {
        return 'Caw';
    }
}