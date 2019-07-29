'use strict';
declare function require(path: string): any;
export {};
const fs = require('fs');
// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returxns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.
let contentOfLogs = fs.readFileSync('logs.txt', 'utf-8');
let uniqueIpAddress: string[] = contentOfLogs.split('\n');
let uniqueIpAddress1: string[] = [];
function lookingForIPs() {
for (let index = 0; index < uniqueIpAddress.length; index++) {
   let eachLine: string = uniqueIpAddress[index]
   let ipAddress: string = eachLine.substring(26, 38);
   //let ipAddressIntoArray: string[] = ipAddress.split(':');
   if (!uniqueIpAddress1.includes(ipAddress)) {
       uniqueIpAddress1.push(ipAddress)
   }
}
console.log(uniqueIpAddress1);
}
function getPostRatio() {
   let sumGet: number = 0;
   let sumPost: number = 0;
   for (let index = 0; index < uniqueIpAddress.length; index++) {
       let eachLine: string = uniqueIpAddress[index]
       let getAndPost: string = eachLine.substring(41, 45);
       if (getAndPost === 'GET ') {
           sumGet += 1;
       } else if (getAndPost === 'POST') {
           sumPost += 1;
       }
   }
   let percentageOfGets: number = (sumGet * 100) / uniqueIpAddress.length;
   let percentageOfPosts: number = (sumPost * 100) / uniqueIpAddress.length;
   console.log(`Percentage of Get requests: ${percentageOfGets}%`);
   console.log(`Percentage of Post requests: ${percentageOfPosts}%`);
   }
lookingForIPs();
getPostRatio();

