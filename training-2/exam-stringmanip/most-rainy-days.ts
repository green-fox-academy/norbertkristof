// ### Most rainy days
// Write a method which can read and parse a file containing information about
// weather in various cities. The method must return the name of the city which
// had the most rainy days.
// elvalasztom vesszok altal, 3 oszlop van, es a masodik 2 oszlop ertekei kellenek, es azokat szamolom
'use strict';
export{}
declare function require(path: string): any;
const fs = require('fs');
let content = fs.readFileSync('most-rainy-days.txt', 'utf-8');

let contentToArray: string[] = content.split('\r\n');
//console.log(contentToArray);
let citiesWithWeather: Map<string, number> = new Map();
for (let i = 0; i < contentToArray.length; i++) {
   let column: string[] = contentToArray[i].split(',');
   //console.log(column);
       let weatherAndCity: string = '';
       weatherAndCity += column[1];
       weatherAndCity += column[2];
       if (citiesWithWeather.has(weatherAndCity)) {
           citiesWithWeather.set(weatherAndCity, citiesWithWeather.get(weatherAndCity) + 1)
       } else {
           citiesWithWeather.set(weatherAndCity, 1);
       }
}
console.log(citiesWithWeather);
let maxCount: number = 0;
let stringForMaxCount: string = null;
citiesWithWeather.forEach((count, string) => {
if (count > maxCount) {
   maxCount = count;
   stringForMaxCount = string;
}
})
console.log(stringForMaxCount, maxCount);