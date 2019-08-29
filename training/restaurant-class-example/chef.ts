// - It should store information about the `meals` it ever cooked (name of the food + amount of times it was cooked)
// - Whenever it is instructed to `work`:
//   - It should increase its `experience` by `1`
// - It should have a `cook` behavior
//   - This should get the `name of the food` as an input
//   - This should update the `meals` information so we are able to track that it cooked this specific food again

'use strict';
import Employee from "./employee";

export default class Chef extends Employee {

    meals: {[k:string]:number} = {};
    constructor(name: string, experience: number = 0) {
        super(name, experience)
    }

    cook(foodName: string):void {
        if (this.meals[foodName]) {
            this.meals[foodName]++
        }
        else { this.meals[foodName] = 1;}
    }

    work():void {
        this.experience ++;
    }

    
}