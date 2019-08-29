// - It should store the amount of `tips` it has - in the beginning this is `0`
// - Whenever it is instructed to `work`:
//   - It should increase the amount of `tips` by `1`
//   - It should increase its `experience` by `1`

'use strict';
import Employee from "./employee";

export default class Waiter extends Employee {
    tips: number;
    constructor(name: string, experience: number = 0, tips: number) {
        super(name, experience)
        this.tips = tips;
    }
    work():void {
        this.experience ++;
        this.tips ++;
    }
}