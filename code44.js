// funtion to search index of value in given array and
//this type of function is called function declaration.

function findTarget(array,target) {
    for(let i = 0; i < array.length; i++){
        if(array[i] == target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,2,3,4,5,6,7,8];
const ans = findTarget(myArray,5);
console.log(ans);