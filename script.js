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

// Define a variable to store the value globally
let buttonContent = "";

//Define array to add values
let calculationValues = [];

let valueOne = 0;
let valueTwo = 0;


/*This section displays values on the calculator "screen"
    there are two ways of displaying a value, either clicking on the button
    or pressing an operand button after two values have been previously pressed. */


//Create a variable for section buttons will be clicked
const buttonClickSection = document.getElementById("values");
//Create a variable for the display section
let displayValue = document.getElementById("display").innerHTML = "";

//Option 1: Button pressing, this is listening for the clicks.
buttonClickSection.addEventListener("click", function(event){
    // Check if the clicked element has the class "operand"
    if (event.target.classList.contains("operand")) {
        // Then get the value of the button clicked, we call it buttonContent
        let buttonContent = event.target.value;
        // Display value of the number(buttonContent) on the calculator. We select the div by its ID and set it's innerHTML to the value of buttonContent.
        let displayValue = document.getElementById("display").innerHTML = buttonContent;

        //Anything in display is added to array.
        calculationValues.push(displayValue);
        console.log('Current array: '+ calculationValues)
        ValueDistribution(); 

    }

    // Check if the clicked element has the class "operator", we don't display the character.
    else if (event.target.classList.contains("operator")) {
        // Get the value of the button clicked
        let buttonContentOperator = event.target.value;
        // Do something with buttonContent
        console.log(buttonContentOperator);

        //Anything in display is added to array.
        calculationValues.push(buttonContentOperator);
        console.log('Current array: '+ calculationValues)
        ValueDistribution(); 

    }
});

// This function will distribute the values to their functions based on their postion (firstNumber, Operator, lastNumber)
function ValueDistribution() {
    if ((calculationValues.length) === 3) {
        //This section is to arrange the values that get sent to the add function
        if(calculationValues.includes('+')){
            firstNumber = parseInt(calculationValues[0]);
            lastNumber = parseInt(calculationValues[2]);
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
