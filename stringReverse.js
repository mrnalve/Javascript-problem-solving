let str = "Hello World";
function reve(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        const char = str[i];
        reverse += char;
    }
    return reverse
}
console.log(reve(str));

// In another complex way

// function reverseWord(sentence) {
//     sentence = sentence.split("")
//     let char = [];
//     for (let i = 0; i < sentence.length / 2; i++) {
//         char = sentence[i];
//         sentence[i] = sentence[sentence.length - 1 - i];
//         sentence[sentence.length - 1 - i] = char;
//     }
//     sentence = sentence.join("").toString();
//     return sentence
// }

// console.log(reverseWord("Hello everyone"));