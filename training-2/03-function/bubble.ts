//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
'use strict';
function bubble(aragorn: number[]):number[] {
    return aragorn.sort((n1, n2) => n1 - n2);    // .sort array function ABC-be sortolja azt ami a listaban van!
                                                 // ez az n1 n2 ez nemtommi, de a ket szamjegyu szamokat sorba rakja nelkuluk
                                                 // de az egy szamjegyueket kulon sorba teszi szoval valami olyasmire hathat
}



//  Example:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]