// - Every employee has a `name`, an `experience` (number) and a method `work`
// - The `experience` should start from `0` by default if it is not provided
// - Every employee should be able to `work`, however the specific behavior is different for every kind
// **We cannot hire or create basic employee** because they should always be some kind of specific employee like `Chef`, `Manager` or `Waiter`.

'use strict';

export default abstract class Employee {
    name: string;
    experience: number;

        constructor(name: string, experience: number = 0) {
        this.name = name;
        this.experience = experience;
    }
    
    abstract work():void;

    
}

