'use strict';

import Animal from './animal';

export default class Reptile extends Animal {
    isScary: boolean;
    numberOfLegs: number;

    constructor(name: string = 'default reptile name', age: number = 0, sex: string = 'unknown',
        district: string = 'Reptile district', scary?: boolean, numoflegs?: number) {
        super(name, age, sex, district);
        this.isScary = scary;
        this.numberOfLegs = numoflegs;
    }

    breed(): string {
        return 'laying eggs';
    }

    makeSound(): string {
        return 'Hisssss';
    }
}