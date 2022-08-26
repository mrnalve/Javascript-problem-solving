function enterArray(arr) {
    let reverse = [];
    for (i = num.length - 1; i >= 0; i--) {
        let ele = num[i];
        reverse.push(ele)
    }
    return reverse;
}
let num = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(enterArray(num));

// Main array element reverse
let number = [1, 2, 3, 4, 5, 6, 7, 8];
let temp = [];
for(i = 0; i < number.length / 2; i++){
    temp = number[i];
    number[i] = number[number.length - 1 -i];
    number[number.length - 1 -i] = temp;
}
console.log(number);
