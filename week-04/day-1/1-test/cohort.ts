'use strict';
import Student from "./student";
import Mentor from "./mentor";


class Cohort {
    name: string;
    students: Student[];
    mentors: Mentor[];

    //     name: the name of the cohort
    // students: a list of Students
    // mentors: a list of Mentors

    constructor(name: string, students: Student[] = [], mentors: Mentor[] = []) {
        this.name = name;
        this.students = students;
        this.mentors = mentors;
    }


    //     methods:
    // addStudent(Student): adds the given Student to students list
    // addMentor(Mentor): adds the given Mentor to mentors list
    // info(): prints out 'The name cohort has students.size students and mentors.size mentors.'

    addStudent(Student: Student):void {
        this.students.push(Student);
    }

    addMentor(Mentor: Mentor):void {
        this.mentors.push(Mentor);
    }
    info() {
        console.log('The' + this.name + ' cohort has ' + this.students.length + 'students and ' + this.mentors.length + 'mentors.');
    }

}

export default Cohort;