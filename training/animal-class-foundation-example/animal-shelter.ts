// Animal shelter
// It must have a budget, an animals list, an adopters name list
// The shelter starts with 50€ without any Animal and adopter
// It must have a method named rescue this method takes an Animal as parameter
// and add the animal to the shelter's list and return the size of the list
// It must have a method named heal this method heals the first not healthy Animal
// if it is possible by budget, returns the amount of healed animals(0 or 1)
// It must have a method named addAdopter this method takes a name as a parameter
// and saves it as a potential new owner
// It must have a method named findNewOwner
// this method pairs a random name with a random adoptable Animal if it is possible
// and removes both of them from the lists
// It must have a method named earnDonation this method takes an amount as parameter
// and increases the shelter's budget by the parameter's value and returns the current budget
// It must have a method named toString that represents the shelter
// and print all the informations about the shelter and the animals in the following format:

'use strict'

import Animal from './animal'
import Cat from './cat';
import Dog from './dog';
import Parrot from './parrot';

export default class AnimalShelter {
    budget: number;
    animalList: Animal[] = [];
    adoptersNameList: string[] = [];
    adoptedAnimals: Animal[] = [];

    constructor(budget: number = 50, animalList: Animal[], adoptersNameList: string[]) {
        this.budget = budget;
        this.animalList = [];
        this.adoptersNameList = [];
    }

    rescue(animal: Animal): number {
        this.animalList.push(animal);
        return this.animalList.length;
    }

    heal() :number {
        let healedAnimals: number = 0;
        this.animalList.forEach(element => {
            if (element.isHealthy === true && this.budget > element.healCost) {
                this.budget -= element.healCost;
                element.heal();
                healedAnimals ++;
            }
        });
        return healedAnimals;
    }

    addAdopter(addedname: string) {
        this.adoptersNameList.push(addedname);
    }

    findNewOwner(): void {
        let randomAnimal: number = Math.floor(Math.random() * this.animalList.length);
        let randomAdopter: number = Math.floor(Math.random() * this.adoptersNameList.length);
        this.animalList[randomAnimal].ownerName = this.adoptersNameList[randomAdopter];
        this.adoptedAnimals.push(this.animalList[randomAnimal]);
        this.animalList.splice(randomAnimal, 1);
        this.adoptersNameList.splice(randomAdopter, 1);
    }

    earnDonation(amount: number): number {
        this.budget += amount;
        return this.budget;
    }

    toString() {
        console.log(`Budget: ${this.budget}€`);
        console.log(`There are ${this.animalList.length} animal(s) and ${this.adoptersNameList.length} potential adopter(s).`);
        for (let i = 0; i < this.animalList.length; i++) {
            if(!this.animalList[i].isHealthy) {
                console.log(`${this.animalList[i].name} is not healthy (${this.animalList[i].healCost}€) and not adoptable`)
            } else {
                console.log(`${this.animalList[i].name} is healthy and adoptable`);
            }
        }
    }
 }


