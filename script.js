// Create a function to add two values.
const add = function(firstNumber,lastNumber){
    let operator = '+';
    return (firstNumber + lastNumber)
}
// Create a function to subtract two values.
const subtract = function(firstNumber,lastNumber){
    let operator = '-';
    return (firstNumber-lastNumber)
}

// Create a function to multiply two values.
const multiply = function(firstNumber,lastNumber){
    let operator = '*';
    return (firstNumber*lastNumber)
}

// Create a function to divide two values.
const divide = function(firstNumber,lastNumber){
    let operator = '/';
    return (firstNumber/lastNumber)
}

// Create a function to operate that calls on the previously declared functions depending on the operator.
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

/*Create a listening variable, that identifies what has been clicked on the calculator
extracts it's html value and then displays's it on the display secction. */

//Create a variable where the buttons will be clicked.
const buttonClickSection = document.getElementById("container");

// Define a variable to store the value globally
let buttonContent = "";

//Listen for the clicks.
buttonClickSection.addEventListener("click", function(event){
    //Get the value of the button clicked
    buttonContent = event.target.value;
    // Select the div by its ID and set it as it's innerHTML to display.
    document.getElementById("display").innerHTML = buttonContent;
    console.log("Button clicked, content is now: " + buttonContent);

    useButtonContent(); 

});

// This function will always use the latest value of buttonContent
function useButtonContent() {
    console.log("Current button content:", buttonContent);
}

//Store the first number, store the operator and store the second number