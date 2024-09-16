// Create a function to add two values.
const add = function(firstNumber,lastNumber){
    let operator = '+';
    let result = parseInt(firstNumber + lastNumber)
    document.getElementById("display").innerHTML = result;
}
// Create a function to subtract two values.
const subtract = function(firstNumber,lastNumber){
    let operator = '-';
    let result = parseInt(firstNumber - lastNumber)
    document.getElementById("display").innerHTML = result;
}

// Create a function to multiply two values.
const multiply = function(firstNumber,lastNumber){
    let operator = '*';
    let result = parseInt(firstNumber * lastNumber)
    document.getElementById("display").innerHTML = result;
}

// Create a function to divide two values.
const divide = function(firstNumber,lastNumber){
    let operator = '/';
    let result = parseInt(firstNumber / lastNumber)
    document.getElementById("display").innerHTML = result;
}

// Create a function to operate that calls on the previously declared functions depending on the operator.
const operate = (firstNumber, operator, lastNumber) => {
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

// Define a variable to store the value globally
let buttonContent = "";
let sign = '';
let calculationValues = [];
let valueOne = '' ;
let valueTwo = '' ;


/*This section displays values on the calculator "screen"
    there are two ways of displaying a value, either clicking on the button
    or pressing an operand button after two values have been previously pressed. */


//Create a variable for section buttons will be clicked
const buttonClickSection = document.getElementById("values");
//Create a variable for the display section
let displayValue = document.getElementById("display").innerHTML = "";

//Option 1: Button pressing, this is listening for the clicks.
buttonClickSection.addEventListener("click", function(event){
    // Then get the value of the button clicked, we call it buttonContent
    let buttonContent = event.target.value;
    // Check if the clicked element has the class "operand" if so display value

    //This section is for the First number.
    if ((event.target.classList.contains("operand")) && calculationValues.length < 1) {
        // Display value of the number(buttonContent) on the calculator. We select the div by its ID and set it's innerHTML to the value of buttonContent.
        // Append the value of buttonContent to the existing display value
        let displayElement = document.getElementById("display");
        valueOne = displayElement.innerHTML += buttonContent;
        console.log('The value 1 is:' + valueOne)
    }

    //This section is for the operator (+,-,*,/).
    // Check if the clicked element has the class "operator", we don't display the character.
    else if (event.target.classList.contains("operator") && calculationValues.length < 1) {
        //Anything in display is added to array.
        calculationValues.push(valueOne)
        sign = event.target.value;
        console.log('The operator is '+ sign);
    }

    //This section is for the second number.
    else if ((event.target.classList.contains("operand")) && calculationValues[0] != null) {
        
        // This is the second number, so if there's is no operator in the array then push it and restart the values displayed in the array.
        if (calculationValues[1] != sign){
            calculationValues.push(sign);
            document.getElementById("display").innerHTML = ""
        }

        displayElementTwo = document.getElementById("display"); // Grabs the area to display and displays value.
        valueTwo = displayElementTwo.innerHTML += buttonContent;
        console.log('The value 2 is: ' + valueTwo)
    }

    // Check if the clicked element has the class "operator", we don't display the character.
    else if (event.target.classList.contains("operator") && calculationValues.length > 2 ) {
        //Anything in display is added to array.
        sign = event.target.value;
        
    }

    else if (event.target.classList.contains("equals") && calculationValues[0] != null ) {
        calculationValues.push(valueTwo)
        ValueDistribution(calculationValues[0],calculationValues[2])
        
    }

    else if (event.target.classList.contains("clear")) {
        valueOne = '';
        valueTwo = '';
        sign = '';
        calculationValues = [];
        document.getElementById("display").innerHTML = '0';

        
    }

    console.log(calculationValues)
    console.log('The length of the array: ' + calculationValues.length)
});


// This function will distribute the values to their functions based on their postion (firstNumber, Operator, lastNumber)
function ValueDistribution(firstOperand, lastOperand) {
    console.log('Value One: ' + valueOne)
    console.log('Value Two: ' + valueTwo)
    if ((calculationValues.length) === 3) {
        //This section is to arrange the values that get sent to the add function
        if(calculationValues.includes('+')){
            firstNumber = parseInt(firstOperand);
            lastNumber = parseInt(lastOperand);
            add(firstNumber,lastNumber)
        }
        //This section is to arrange the values that get sent to the subtract function
        else if(calculationValues.includes('-')){
            firstNumber = parseInt(calculationValues[0]);
            lastNumber = parseInt(calculationValues[2]);
            subtract(firstNumber,lastNumber)
        }

        //This section is to arrange the values that get sent to the multiply function
        else if(calculationValues.includes('*')){
            firstNumber = parseInt(calculationValues[0]);
            lastNumber = parseInt(calculationValues[2]);
            multiply(firstNumber,lastNumber)
        }
        
        //This section is to arrange the values that get sent to the divide function
        else if(calculationValues.includes('/')){
            firstNumber = parseInt(calculationValues[0]);
            lastNumber = parseInt(calculationValues[2]);
            divide(firstNumber,lastNumber)
        }
    }
}

