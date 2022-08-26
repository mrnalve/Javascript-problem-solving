let digit = prompt("Guess the number 1 to 10");
let randomNum = Math.round(Math.random()*10);

if (isNaN(digit)) {
    alert("Please insert a number");
}else if (digit>10 || digit<=0){
    alert("Insert a number between 1 to 10");
}else if(digit == randomNum){
    alert("O ho!! Your guessed is right");
}else{
    alert("You are wrong, please try again");
};

