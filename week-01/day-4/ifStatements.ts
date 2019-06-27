let temperature: number = 8;

if(temperature > 30) {
        console.log("it is hot!");

}  else {
    console.log("its not that hot");
}

if(temperature < 10) {
    console.log("it s cold!");

}
if (true && true || (false && false)) {
    console.log("whaaaat?");
}

let num: number = 50;

if(num < 25) {
    console.log("small num");
} else if(25 <= num && num < 50) {
    console.log("middle num");
} else if(50 <= num && num < 75) {
    console.log("big num");
} else {
    console.log("huge num");
}