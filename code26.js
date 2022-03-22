//primitive datatypes vs refernces data types

//primitive datatypes

let num1 = 2;
let num2 = num1;
console.log(`value of num is ${num1}`);
console.log(`value of num is ${num2}`);
num1++;
console.log(`value of num is now ${num1}`);
console.log(`value of num is now ${num2}`);

//reference types
let arr1 = ['mango','apple','grapes'];
let arr2 = arr1;
console.log(`array 1 is ${arr1}`);
console.log(`array 2 is ${arr2}`);
arr1.push("banana");
console.log(`after pusing new element array 1 is ${arr1}`);
console.log(`after pusing new element array 2 is ${arr2}`);