'use strict';
// Create a class that represents an aircraft
// There are 2 types of aircrafts: F16 and F35
// Both aircrafts should keep track of their ammunition
// F16
// Max ammo: 8
// Base damage: 30
// F35
// Max ammo: 12
// Base damage: 50
// All aircrafts should be created with an empty ammo storage

export default class Aircraft {

    type: string;
    currentAmmo: number;
    maxAmmo: number;
    baseDamage: number;
    allDamage: number;
    
    constructor(type: string, currentAmmo: number = 0, maxAmmo: number, baseDamage: number, allDamage: number = 0) {
        this.type = type;
        this.currentAmmo = currentAmmo;
        this.maxAmmo = maxAmmo;
        this.baseDamage = baseDamage;
        this.allDamage = allDamage;
    }

    fight():number {
        let damage: number = this.baseDamage * this.currentAmmo;
        this.currentAmmo = 0;
        return this.allDamage + damage;
    }

    refill(amount: number):number {
        let refill: number = 
        ammoStorage: number;
        if (amount >= this.maxAmmo - this.currentAmmo) {

        }
        return refill;
    }

    getType():string {
        return this.type;
    }

    getStatus():string {
        return `Type ${this.type}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.allDamage} `
    }

    isPriority():boolean {
        return this.type === 'F35';
    }

}