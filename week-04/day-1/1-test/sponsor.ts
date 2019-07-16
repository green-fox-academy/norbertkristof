'use strict';
import Person from './person';

class Sponsor extends Person {
    company: string; // name of the company 
    hiredStudents: number; //number of students hired

    constructor(name?: string, age?: number, gender?: string, company: string = 'Google', hiredStudents: number = 0) {
        super(name, age, gender);
        this.company = company;
        this.hiredStudents = hiredStudents;
    }

    // method:
    // introduce(): 'Hi, I'm name, a age year old gender who represents company and hired hiredStudents students so far.'
    // hire(): increase hiredStudents by 1
    // getGoal(): prints out 'My goal is: Hire brilliant junior software developers.'

    introduce() {
        console.log('Hi, I\'m ' + this.name + ' a ' + this.age + 'year old ' + this.gender + 'who represents ' + this.company + 'and hired ' + this.hiredStudents + ' so far.');
    }

    hire() {
        return this.hiredStudents = this.hiredStudents + 1;
    }
    getGoal() {
        console.log('My goal is: Educate brilliant junior software developers.');
    }

}

export default Sponsor;