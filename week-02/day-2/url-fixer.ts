'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

//var re = "https//www.reddit.com/r/nevertellmethebots"; 
//var str = "https//www.reddit.com/r/nevertellmethebots"; 
//let newstr = str.replace(re, "h"); 
//console.log(newstr);

let result: string = url.replace('bots' , 'odds').replace('https//' , 'https://');
    
console.log(result);