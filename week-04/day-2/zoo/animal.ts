// So we need an abstract Animal class

// it has name, age field
// it has getName() and breed() methods
// Have we got all fields and methods we should? What about gender? Any other? 
// Write down at least 3 fields and/or methods that should be included in Animal.

'use strict';

export default abstract class Animal {
    private name: string;
    age: number;
    sex: string;
    district: string;

    constructor(name = 'default animal name', age: number = 0, sex = 'undefined', district = 'undefined') {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.district = district;
    }

    getName():string {
        return this.name;
    }

    abstract breed(): string;
    abstract makeSound(): string;
}