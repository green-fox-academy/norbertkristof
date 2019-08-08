let word: string = "mikorkakalman";
function countLettersIntoMap(word: string): any {
 let myMap = new Map();
 for (let i: number = 0; i < word.length; i++) {
   if (myMap.has(word[i])) {
     let saveOrigNumber: number = myMap.get(word[i]);
     myMap.delete(word[i]);
     myMap.set(word[i], saveOrigNumber + 1);
   } else {
     myMap.set(word[i], 1);
   }
 }
 return myMap;

}

console.log(countLettersIntoMap(word));
