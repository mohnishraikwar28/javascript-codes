// spread operator in objects

const person = {
    name : "mohnish",
    age : 22,
    sal : 50000
};

const person2 = {
    job:'software developer',
    id:22
};

const person3 = {...person,...person2};


console.log(person3);

