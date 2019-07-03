// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals: string[] = ["koal", "pand", "zebr"];

console.log(animals.map(function(item) {
    item += 'a';
    return item;
}))

for (let index: number = 0; index < animals.length; index++) {
    animals[index] += 'a';
    console.log(animals[index]);
}