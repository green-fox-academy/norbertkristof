// Write a method which can read and parse a file containing information about 
// weekly feedbacks from apprentices about a mentor.
// The mentor is rated in 4 different metrics, those are respectively 
// (matReview, presSkills, helpfullness, explanation) separated with 1 space:
// m = matReview
// p = presSkills
// h = helpfulness
// e = explanation
// m p h e
// 1 3 5 3   // this line is an answer from an apprenitce
// 2 3 4 3   // this is another response
// ...
// The method must return a map containing the average rating (in each metric) of the mentor.
// Output
// {
//   matReview: 2.25,
//   presSkills: 4.0, // or 4 is fine as well               // jol van hasznalva a try catch funkcion belul!
//   helpfulness: 4.5,
//   explanations: 3.75
// }
'use strict';
export{}
declare function require(path: string): any;
const fs = require('fs');
let content;

function weeklyFeedback(fileToRead: string): void {
    try {
        content = fs.readFileSync(fileToRead, 'utf-8');
        content = content.replace(/(\r\n|\n|\r)/gm, " ");
        content = content.split(" ").map(Number);

        let output = {
            matReview: 0,
            presSkills: 0,
            helpfulness: 0,
            explanations: 0
        }

        let currentAverage = 0;
        let counter: number = 0;

        for (let j: number = 0; j < Math.sqrt(content.length); j++) {
            currentAverage += content[j * 4];
            counter++;
        }

        currentAverage = currentAverage / counter;
        output.matReview = currentAverage;

        currentAverage = 0;
        counter = 0;

        for (let j: number = 0; j < Math.sqrt(content.length); j++) {
            currentAverage += content[j * 4 + 1];
            counter++;
        }

        currentAverage = currentAverage / counter;
        output.presSkills = currentAverage;

        currentAverage = 0;
        counter = 0;

        for (let j: number = 0; j < Math.sqrt(content.length); j++) {
            currentAverage += content[j * 4 + 2];
            counter++;
        }

        currentAverage = currentAverage / counter;
        output.helpfulness = currentAverage;

        currentAverage = 0;
        counter = 0;

        for (let j: number = 0; j < Math.sqrt(content.length); j++) {
            currentAverage += content[j * 4 + 3];
            counter++;
        }

        currentAverage = currentAverage / counter;
        output.explanations = currentAverage;

        console.log(output);
    }

    catch (e) {
        console.log("Hoston, we\'ve got a problem");
    }
}

weeklyFeedback('weekly-feedback.txt')
