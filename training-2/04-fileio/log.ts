// Read all data from 'log.txt'.
// Write a function that returns an array with the unique IP adresses.
// kiszed egy konkret reszt minden sorbol * meg van adva lent substring 26, 38 a pozicioja
// szoval itt nem vesszonkent, vagy space-enkent darabolom fel a sort hanem konkret szamokkal
// VAAAAAAAAAGY, masik megoldas:
// ures soronkent splittelem, es szamolok 8 ures sor van addig hogy bejon az ip adress
// Mon Feb  5 10:47:12 2018   48.84.11.60   POST /    <=== 8 ures sor van ip adressig, es [8] igy adom meg

// Write a function that returns the GET / POST request ratio.
// hany szazalekban fordul elo a GET es POST szo a szovegben
// ugyancsak 2 megoldasa van, egy ami space-enkent szedi ki oket, meg 1 ami megadja a pontos helyet 41, 51
// vigyazni kell hogy a GET_ es a POST szo nem ugynaolyan hosszu, zoval a GET utan kell egy space ha a
// a helyet szamokkal akarom megadni (de ugyse ugy akarom mert az gagyi, azok ki is vannak kommentelve)

'use strict';
export{}
declare function require(path: string): any;
const fs = require('fs');
let fileContent = fs.readFileSync('log.txt', 'utf-8');  

let stringArray: string[] = fileContent.split('\n');
let uniqueIpAddress: string[] = [];


function lookingForIPs() {
for (let index = 0; index < stringArray.length; index++) {
    let eachLine: string = stringArray[index]
    let ipAddress: string = eachLine.split(' ')[8];     // <== 8 darab ures sor van a kivagando reszig
    //let ipAddress: string = eachLine.substring(26, 38); // <== itt megadom h 26 es 38 karakter kozott vagja ki
    if (!uniqueIpAddress.includes(ipAddress)) {
        uniqueIpAddress.push(ipAddress)
    }
}
console.log(uniqueIpAddress);
}

lookingForIPs();

///// ......

function getPostRatio() {
    let sumGet: number = 0;
    let sumPost: number = 0;
    for (let index = 0; index < stringArray.length; index++) {
        let eachLine: string = stringArray[index]
        //let getAndPost: string = eachLine.substring(41, 45);   // <== ha ezt akarom hasznalni akkor at kell
        let getAndPost: string = eachLine.split(' ')[11]         // irni a 'GET' et 'GET '-re, mert a post es get
        if (getAndPost === 'GET') {                              // szo nem ugyanolyan hosszu es kell utana egy space
            sumGet += 1;
        } else if (getAndPost === 'POST') {
            sumPost += 1;
        }
        
    }
    let percentageOfGets: number = (sumGet * 100) / stringArray.length;
    let percentageOfPosts: number = (sumPost * 100) / stringArray.length;
    console.log(`Percentage of Get requests: ${percentageOfGets}%`);
    console.log(`Percentage of Post requests: ${percentageOfPosts}%`);
    }

    getPostRatio();

