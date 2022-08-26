function guessNumber(num) {
    let random_number = Math.round(Math.random() * 6);
    if (num>random_number) {
        return "You have selected large numbers"
    }else if(num<random_number){
        return "You have selected small numbers"
    }else{
        return "You guessed it right!!"
    }
}
console.log(guessNumber(6));