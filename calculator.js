function Calculate(num1, num2, operation) {
    operation = operation.toLowerCase();
    if(operation == 'plus') return num1+num2;
    else if(operation == 'minas') return num1-num2;
    else if(operation == 'multiplication') return num1*num2;
    else if(operation == 'division') return num1/num2;
    else if(operation == 'modulas') return num1%num2;
    else return "Invalid operation"
}

console.log(Calculate(6,8,"multiplication"));