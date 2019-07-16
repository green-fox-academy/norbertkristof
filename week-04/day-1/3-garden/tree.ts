'use strict'

import Plant from "./plant";

class Tree extends Plant {

    constructor(color: string) {
        super(color, 0.4);
    }

    isThirsty(): boolean {
        return this.waterAmount < 10;
    }

    status():void {
        let stat: string;
        if(this.isThirsty()) {
            stat = 'needs'
        } else {
            stat = 'doesn\'t neeed'
        }
        console.log(`The ${this.color} tree ${stat} water`)
    }

}

export default Tree;