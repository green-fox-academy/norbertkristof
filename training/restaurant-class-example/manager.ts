// - It should have a `moodLevel` - in the beginning this is `400`
// - Whenever it is instructed to `work`:
//   - It should increase the `experience` by `1`
//   - It should invoke its `have a meeting` behaviour
// - Whenever `have a meeting` is invoked, the `moodLevel` should decrease by the managers `experience`

'use strict';
import Employee from "./employee";

export default class Manager extends Employee {
    moodLevel: number;
    constructor(name: string, experience: number = 0, moodLevel: number = 400) {
        super(name, experience)
        this.moodLevel = moodLevel;
    }
    
    haveAMeeting() {
        this.moodLevel += this.experience;
    }
    
    work():void {
        this.experience ++;
        this.haveAMeeting;
    }

}