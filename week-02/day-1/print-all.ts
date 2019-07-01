// -  Create a variable named `integers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `integers` to the console*
// *hint: use a loop, console.log(integers) won't cut it
// -  bonus for using the correct built in array method

'use strict';

let integers: number[] = [4, 5, 6, 7];

//integers.forEach(function(item) {
//    console.log(item);
// })
 
// for (let index: number = 0; index < integers.length; index++) {
//    console.log(integers[index])
//}


function getNewArr(){
        
    return integers.map(function(item,index){
        item.full_name = [item.first_name,item.last_name].join(" ");
        return item;
    })
    
}

console.log(getNewArr());