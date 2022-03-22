//string methods

// trim() - it will remove extra spaces
// toUpperCase() - it will convert string to UpperCase
// toLowerCase() -  - it will convert string to LowerCase
// slice - The slice() method selects from a given start, up to a (not inclusive) given end.

let fName =  '   mohnish';
console.log(fName.length);
let newString = fName.trim();
console.log(newString);
console.log(newString.length);

console.log(newString.toUpperCase());

console.log(newString.toLowerCase());

console.log(newString.slice(0,4));