// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

'use strict';
let daily: number = 6;
let semesterWeeks: number = 17;
let workingDays: number = 5;
let semesterDays: number = semesterWeeks * workingDays; 
let totalAverage: number = semesterWeeks * workingDays * daily;
console.log('Total hours spent on coding', daily * semesterDays);
console.log('Percentage of coding:', daily * semesterDays / totalAverage);