'use strict'

import Plant from "./plant";

class Flower extends Plant {

    constructor(color: string) {
        super(color, 0.75);
    }

    isThirsty(): boolean {
        return this.waterAmount < 5;
    }

    status(): void {
        let stat: string;
        if (this.isThirsty()) {
            stat = 'needs';
        } else {
            stat = 'doesn\'t neeed';
        }
        console.log(`The ${this.color} flower ${stat} water`)
    }

}

export default Flower;