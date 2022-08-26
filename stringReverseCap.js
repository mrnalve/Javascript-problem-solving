// Reverse string and first letter must be uppercase
function reverseCap(str) {
    let reverse = "";
    for (i = str.length - 1; i >= 0; i--) {
        if (i == str.length - 1) {
            ascii = str.charCodeAt(str.length - 1);
            if (ascii > 95) {
                reverse += String.fromCharCode(ascii - 32);
            };
        } else {
            reverse += str[i];
        };
    };
    return reverse;
};
console.log(reverseCap("hello everybody"));