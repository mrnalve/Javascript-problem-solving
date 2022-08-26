// 1, 2, 3, 4, *, 6, 7, 8, 9, **, 11, 12, 13, 14, ***, ......

function enterValue(num) {
    let arr = new Array(num)
    for (let i = 1; i <= num; i++) {
        if (i % 5 != 0) {
            arr[i - 1] = i;
        } else {
            let x = i / 5;
            let star = "";
            for (let j = 0; j < x; j++) {
                star += "*"
                arr[i - 1] = star;
            }
        };
    };
    return arr;
}
console.log(enterValue(15));