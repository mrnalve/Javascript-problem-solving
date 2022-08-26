function firstName(str) {
    output = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if(char ==  " ") break;
        output+= char;
    }
    return output
}
console.log(firstName("Rubayat Nur"));