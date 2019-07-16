'use strict';
import Person from './person';

class Student extends Person {
    previousOrganization: string;
    skippedDays: number;

    constructor(name?: string, age?: number, gender?: string, previousOrganization: string = 'The School of Life', skippedDays: number = 0) {
        super(name, age, gender);
        this.previousOrganization = previousOrganization;
        this.skippedDays = skippedDays;
    }

    introduce() {
        console.log('Hi, I\'m ' + this.name + ' a ' + this.age + 'year old ' + this.gender + 'from ' + this.previousOrganization + 'who skipped ' + this.skippedDays + 'days from the course already.');
    }

    getGoal() {
        console.log('My goal is: Be a junior software developer.');
    }

    skipDays(numberOfDays) {
        return numberOfDays = this.skippedDays + numberOfDays;
    }
}

export default Student;