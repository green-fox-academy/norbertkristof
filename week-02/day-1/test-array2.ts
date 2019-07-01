let alphas: string[];
alphas = ["1", "2", "3", "4"]
console.log(alphas[0]);
console.log(alphas[1]);

let alphas2;
alphas2 = ["1", "2", "3", "4"];
console.log(alphas2[0]);
console.log(alphas2[1]);

let nums: number[] = [1, 2, 3, 3]
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);

let nums2 = [1, 2, 3, 3];
console.log(nums2[0]);
console.log(nums2[1]);
console.log(nums2[2]);
console.log(nums2[3]);


let arr_names: number[] = new Array(4)

for (var i = 0; i < arr_names.length; i++) {
   arr_names[i] = i * 2
   console.log(arr_names[i])
}

//

var arr_names2 = new Array(4);

for (var i = 0; i < arr_names2.length; i++) {
   arr_names2[i] = i * 2;
   console.log(arr_names2[i]);
}

//

var names3 = new Array("Mary", "Tom", "Jack", "Jill");
for (var i = 0; i < names3.length; i++) {
   console.log(names3[i]);
}

//

var arr = [12, 13];
var x = arr[0], y = arr[1];
console.log(x);
console.log(y);

//

var j;
var numbs = [1001, 1002, 1003];  // annyiszor megy le a for loop, ahany elem van ebben az array-ben

for (j in numbs) {
   console.log(numbs[j]);
}

//

