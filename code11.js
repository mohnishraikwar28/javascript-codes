// undefined, null and BigInt

let age;
console.log(typeof age);

let value = null;
console.log(typeof value); // it will print Object type because it's a bug in JavaScript


//BigInt is a primitive wrapper object used to represent and manipulate 
//primitive bigint values — which are too large to be represented by the number primitive.

let num = BigInt(233774747474747477474744);
console.log(num);