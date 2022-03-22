//nested if

let winNum =  20;

let asume = +prompt("enter assumed number");

if(asume === 19){
    console.log("you won");
}
else{
    if(asume < winNum){
    console.log("number is too low");
    }
    else{
        console.log("number is too high");
    }
}


