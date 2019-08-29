// Write a program which can store pirates in a ship.

// Pirate
// A pirate has a name, an amount of gold and health points, the default value of which is 10.

// A pirate might be a captain and may have a wooden leg.

// You must create the following methods:

// if a pirate is a captain:

// work() which increases the amount of gold possessed by that pirate by 10 and decrease the HP by 5.
// party() which increases the HP by 10.
// if the pirate is not a captain:

// work() which increases the amount of gold by 1 and decreases the HP by 1.
// party() which increases the HP by 1.
// toString() method:

// if the pirate has a wooden leg, then the string that is returned by the function must look like this:

// Hello, I'm Jack. I have a wooden leg and 20 golds.
// If not:

// Hello, I'm Jack. I still have my real legs and 20 golds.

'use strict';

export default class Pirate {

    name: string;
    amountOfGold: number;
    healthPoints: number;
    isCaptain: boolean;
    hasWoodenLeg: boolean;

    constructor(name: string, isCaptain: boolean, hasWoodenLeg: boolean, amountOfGold: number = 10, healthPoints: number = 10) {
        this.name = name;
        this.amountOfGold = amountOfGold;
        this.healthPoints = healthPoints;
        this.isCaptain = isCaptain;
        this.hasWoodenLeg = hasWoodenLeg;
    }
 
    work(): void {
        if (this.isCaptain === true) {
            this.amountOfGold += 10;
            this.healthPoints -= 5; 
        } else {
            this.amountOfGold += 1;
            this.healthPoints -= 1;
        }
    }

    party(): void {
        if (this.isCaptain === true) {
            this.healthPoints += 10; 
        } else {
            this.healthPoints += 1;
        }
    }

    toString(): string {  // azert return es nem console.log mert ezt kerte a feladat //
        if (this.hasWoodenLeg === true) {
            return `Hello, I'm ${this.name}. I have a wooden leg and ${this.amountOfGold} golds.`;  
        } else {
            return `Hello, I'm ${this.name}. I still have my real legs and ${this.amountOfGold} golds.`;
        }
    }
}
