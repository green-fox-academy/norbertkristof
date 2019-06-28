'use strict';
let daily: number = 6;
let semesterWeeks: number = 17;
let workingDays: number = 5;
let semesterDays: number = semesterWeeks * workingDays; 
let totalAverage: number = semesterWeeks * workingDays * daily;
console.log('Total hours spent on coding', daily * semesterDays);
console.log('Percentage of coding:', daily * semesterDays / totalAverage);