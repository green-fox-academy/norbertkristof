'use strict';
import Person from './person';

class Mentor extends Person {
    level: string; //the level of the mentor (junior / intermediate / senior)

    constructor(name?: string, age?: number, gender?: string, level: string = 'intermediate') {
        super(name, age, gender);
        this.level = level;
    }

//     Mentor(name, age, gender, level)
// Mentor(): sets name to Jane Doe, age to 30, gender to female, level to intermediate

    // getGoal(): prints out 'My goal is: Educate brilliant junior software developers.'
    // introduce(): 'Hi, I'm name, a age year old gender level mentor.'

    introduce() {
        console.log('Hi, I\'m ' + this.name + ' a ' + this.age + 'year old ' + this.gender + this.level + ' mentor.');
    }

    getGoal() {
        console.log('My goal is: Educate brilliant junior software developers.');
    }

}

export default Mentor;