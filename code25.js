//array push - it pus the new element in array 
//pop -  it removes last value of array and also it return the removed element value

let arr = ['hello','hi','bye'];
console.log(`before changing array ${arr}`);
//arr.push(10);
//console.log(arr);
let arr2 = arr.pop();
console.log(arr);
console.log(arr2);

//unshift - it puts new value in array from begining
let branch = ['cse','ee','me'];
console.log(`before unshifting array ${branch}`)
branch.unshift('ex');
console.log(branch);

//shift - it removes the first element of array

let num = [10,20,30];
console.log(`before shifting array ${num}`);
num.shift();
console.log(num);