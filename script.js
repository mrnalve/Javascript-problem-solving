
// function fibo(n) {
//     let fib = [];
//     fib[0] = 0;
//     fib[1] = 1;
//     for (let i = 2; i <= n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     return fib
// }
// console.log(fibo(10));

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// for(i = 0; i<arr.length; i++){
//     for(j = 0; j < arr[i].length; j++){
//         console.log(arr[i][j]);
//     }
// }

// In another way
for (el of arr) {
    for (const element of el) {
        console.log(element);
    };
};