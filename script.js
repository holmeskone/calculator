const add = function(firstNumber,lastNumber){
    let operator = '+';
    return (firstNumber + lastNumber)
}

const subtract = function(firstNumber,lastNumber){
    let operator = '-';
    return (firstNumber-lastNumber)
}

const multiply = function(firstNumber,lastNumber){
    let operator = '*';
    return (firstNumber*lastNumber)
}

const divide = function(firstNumber,lastNumber){
    let operator = '/';
    return (firstNumber/lastNumber)
}

const operate = (firstNumber, lastNumber, operator) => {
    if(operator = '+'){
        const result = add(firstNumber,lastNumber);
        return('The result is ' + result) 
    }
    else if(operator = '-'){
        const result = subtract(firstNumber,lastNumber);
        return('The result is ' + result) 
    }

    else if(operator = '*'){
        const result = multiply(firstNumber,lastNumber);
        return('The result is ' + result) 
    }

    else if (operator = '/'){
        const result = divide(firstNumber,lastNumber);
        return('The result is ' + result) 
    }

}


// let firstNumber = a;
// let lastNumber = b;
// let operators = {
//     '+': add,
//     '-': subtract,
//     '*': multiply,
//     '/': divide,
// }

