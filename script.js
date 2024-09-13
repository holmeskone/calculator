// Create a function to add two values.
const add = function(firstNumber,lastNumber){
    let result = parseInt(firstNumber + lastNumber)
    console.log('The value of this is ' + result)
    console.log(typeof(result))
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

// Define a variable to store the value globally
let buttonContent = "";

//Define array to add values
let calculationValues = [];

let valueOne = 0;
let valueTwo = 0;



//Create a variable for section buttons will be clicked.
const buttonClickSection = document.getElementById("values");
//Listen for the clicks.
buttonClickSection.addEventListener("click", function(event){
    // Check if the clicked element has the class "operand"
    if (event.target.classList.contains("operand")) {
        // Get the value of the button clicked
        let buttonContent = event.target.value;
        // Do something with buttonContent
        console.log(buttonContent);

        // Display value on calculator. Select the div by its ID and set it's innerHTML by display.
        let displayValue = document.getElementById("display").innerHTML = buttonContent;
        console.log("Display value is now: " + displayValue);

        //Anything in display is added to array.
        calculationValues.push(displayValue);
        console.log('Current array: '+ calculationValues)
        ValueDistribution(); 

    }

    // Check if the clicked element has the class "operator"
    else if (event.target.classList.contains("operator")) {
        // Get the value of the button clicked
        let buttonContentOperator = event.target.value;
        // Do something with buttonContent
        console.log(buttonContentOperator);

        // Display value on calculator. Select the div by its ID and set it's innerHTML by display.
        let displayValue = document.getElementById("display").innerHTML = buttonContentOperator;
        console.log("Display value is now: " + displayValue);

        //Anything in display is added to array.
        calculationValues.push(displayValue);
        console.log('Current array: '+ calculationValues)
        ValueDistribution(); 

    }
});

// This function will distribute the values to their functions based on their postion (firstNumber, Operator, lastNumber)
function ValueDistribution() {
    if ((calculationValues.length) === 3) {
        if(calculationValues.includes('+')){
            firstNumber = parseInt(calculationValues[0]);
            lastNumber = parseInt(calculationValues[2]);
            add(firstNumber,lastNumber)
        }
    }
}

//Store the first number, store the operator and store the second number

/*If the value in an array and the value -1 are operand then join, else maintain comma"
numbers = [1,2,3,4,5,6,7,8,9]
function organiseArray() {
    for (i=0;i<=calculation.length; i++){
        if (typeof calculation[i] === 'number') {
            console.log("This is a number");
        } else {
            console.log("The value is not in the array");
        }
    }
}
*/