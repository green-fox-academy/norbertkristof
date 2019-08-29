// Create a Contestant class, this will represent a contestant attending the race. 
// It has 2 private fields (both of them must be set through the constructor)
// name - the name of the contestant
// placement - an integer, it represents the place the contestant finished at the race. It's default value is 0
// and two public methods
// setPlacement(value) - sets the placement field of the contestant to the given value
// toString() - the method should return a string formatted like the following:
// {name} has finished on place: {placement}
'use strict';

export default class Contestant {
    private name: string;
    private placement: number;

    constructor(name: string, placement: number = 0) {
        if (name == '') {
            console.log('Please provide contestant name.');
        } else {
            this.name = name;
            this.placement = placement;
        }
    }

    getName(): string {
        return this.name;
    }

    getPlacement(): number {
        return this.placement;
    }

    setPlacement(placementValue: number) {
        this.placement = placementValue;
    }

    toString(): string {
        return `${this.name} has finished on place: ${this.placement}`
    }
}