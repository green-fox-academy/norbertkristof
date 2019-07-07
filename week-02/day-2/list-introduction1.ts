'use strict';

let lista: string[] = [];

console.log(lista.length);

lista.push('William');

if (lista.length == 0) {
    console.log('true');
} else {
    console.log('false');
}

lista.push('John', 'Amanda');

console.log(lista.length);

console.log(lista[2]);

lista.forEach(function(item) {
    console.log(item);
})

for (let i: number = 1; i <= lista.length; i++) {
    console.log(i + '. ' + lista[i-1]);
}

lista.splice(1, 1);
console.log(lista);

lista.reverse();
console.log(lista);

lista.splice(0);
console.log(lista);