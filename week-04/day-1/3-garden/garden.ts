'use strict'

import Flower from "./flower";
import Tree from "./tree";

class Garden {
    flowers: Flower[];
    trees: Tree[];

    constructor() {
        this.flowers = [];
        this.trees = [];
    }

    addFlower(flower: Flower) {
        this.flowers.push(flower);
    }

    countThirstyPlants(): number {
        let sum: number = 0;
        this.flowers.forEach(function(oneFlower){
            if(oneFlower.isThirsty()) {
                sum++;
            }
        });
        this.trees.forEach(function(oneTree){
            if(oneTree.isThirsty()) {
                sum++;
            }
        });
        return sum;
    }

    calculatePortion(ammount: number): number {
        const thirstyPlantNumber: number = this.countThirstyPlants();
        return ammount / thirstyPlantNumber;
    }

    waterPlants(ammount: number): void {
        const portion: number = this.calculatePortion(ammount)
        console.log(`Watering with ${ammount}`);
        for(let i: number = 0; i < this.flowers.length; i++) {
            if(this.flowers[i].isThirsty()) {
                this.flowers[i].watering(portion);
            }
            this.flowers[i].status();
        }
        this.trees.forEach(function(oneTree) {
            if(oneTree.isThirsty()) {
                oneTree.watering(portion);
            }
            oneTree.status();
        });
        
    }
}

export default Garden;