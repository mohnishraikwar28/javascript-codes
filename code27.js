//how to clone array

//how to concatenate two arrays

let arr1 = ['apple','banana','mango'];
let arr2 = arr1;
console.log(arr1===arr2);

let arr3 = ['apple','banana','mango'];
let arr4 = [].concat(arr3);
arr3.push("new");
console.log(arr3===arr4);
console.log(arr3);
console.log(arr4);