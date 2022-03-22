// iterate object

let person = {
    name:'mohnish',
    email:'mohns28@gmail.com'
}; 

// using for in loop

for(let key in person){
    console.log(`${key} : ${person[key]}`);
}

// object.keys

console.log(Object.keys(person));

// for of loop

for (let key of Object.keys(person)){
    console.log(person[key]);
}