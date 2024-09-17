// Define a variable to store the value globally
let buttonContent = "";
let sign = '';
let calculationValues = [];
let valueOne = '' ;
let valueTwo = '' ;

// Create a function to add two values.
const add = function(firstNumber,lastNumber){

    let result = (parseFloat(firstNumber + lastNumber));
    if (result%1 === 0){
        result = parseInt(result);
        document.getElementById("display").innerHTML = result;
    }

    else if ((result%1 != 0)){
        document.getElementById("display").innerHTML = result.toFixed(2);
    }

    calculationValues [0] = result;
    calculationValues.splice(1,2)
    console.log('This is the length value: ' + calculationValues.length)
}
// Create a function to subtract two values.
const subtract = function(firstNumber,lastNumber){
    let result = parseFloat(firstNumber - lastNumber)
    if (result%1 === 0){
        result = parseInt(result);
        document.getElementById("display").innerHTML = result;
    }

    else if ((result%1 != 0)){
        document.getElementById("display").innerHTML = result.toFixed(2);
    }
    calculationValues [0] = result;
    calculationValues.splice(1,2)
}

// Create a function to multiply two values.
const multiply = function(firstNumber,lastNumber){
    let result = parseFloat(firstNumber * lastNumber)
    if (result%1 === 0){
        result = parseInt(result);
        document.getElementById("display").innerHTML = result;
    }
    else{
        document.getElementById("display").innerHTML = result.toFixed(2);
    }
    calculationValues [0] = result;
    calculationValues.splice(1,2)
}

// Create a function to divide two values.
const divide = function(firstNumber,lastNumber){
    let result = parseFloat(firstNumber / lastNumber)
    if(lastNumber === 0){
        result = 'Not a number';
        document.getElementById("display").innerHTML = result;
    }
    else if (result%1 === 0){
        result = parseInt(result);
        document.getElementById("display").innerHTML = result;
    }

    else if ((result%1 != 0)){
        document.getElementById("display").innerHTML = result.toFixed(2);
    }
    calculationValues [0] = result;
    calculationValues.splice(1,2)

}

// Create a function to operate that calls on the previously declared functions depending on the operator.
const operate = (firstNumber, operator, lastNumber) => {
    if(operator === '+'){
        add(firstNumber,lastNumber);
    }
    else if(operator === '-'){
        subtract(firstNumber,lastNumber);
    }

    else if(operator === 'x'){
        multiply(firstNumber,lastNumber);
    }

    else if (operator === '/'){
        divide(firstNumber,lastNumber);
    }

}

/*Create a listening variable, that identifies what has been clicked on the calculator
extracts it's html value and then displays's it on the display secction. */



/*This section displays values on the calculator "screen"
    there are two ways of displaying a value, either clicking on the button
    or pressing an operand button after two values have been previously pressed. */


//Create a variable for section buttons will be clicked
const buttonClickSection = document.getElementById("values");
//Create a variable for the display section
let displayValue = document.getElementById("display").innerHTML = "0";

//Option 1: Button pressing, this is listening for the clicks.
buttonClickSection.addEventListener("click", function(event){
    // Then get the value of the button clicked, we call it buttonContent
    let buttonContent = event.target.value;
    // Check if the clicked element has the class "operand" if so display value

    //This section is for the First number.
    if ((event.target.classList.contains("operand")) && calculationValues.length === 0) {
        // Display value of the number(buttonContent) on the calculator. We select the div by its ID and set it's innerHTML to the value of buttonContent.
        // Append the value of buttonContent to the existing display value
        let displayElement = document.getElementById("display");
        if(displayElement.innerHTML === '0'){ // If the display element is 0, it means that it's originating from an "AC" (clear) selection, and it should then display the value of the next button clicked. 
            if(buttonContent === '.'){
                displayElement.innerHTML += buttonContent;
                valueOne = parseFloat(buttonContent);
            }
            else{
                valueOne = displayElement.innerHTML = parseFloat(buttonContent);
            }
        } // If not then just add the buttons so the appear one after the other on the same display. Eg. 46 instead of showing '4' and then '6'.
        
        else if (buttonContent === "." && displayElement.innerHTML.includes(".")) {
            console.log('Already has a decimal')
        }
        
        else{
            valueOne = parseFloat(displayElement.innerHTML += buttonContent);
        }
    }

    //This section is for the operator (+,-,*,/).
    // Check if the clicked element has the class "operator", we don't display the character.
    else if (event.target.classList.contains("operator") && calculationValues.length <= 1) {
        //Anything in display is added to array.
        if (valueOne != ''){
            calculationValues.push(valueOne)
        }
        sign = event.target.value;
        console.log('The operator is '+ sign);
    }

    //This section is for the second number.
    else if ((event.target.classList.contains("operand")) && calculationValues[0] != null) {
        
        // This is the second number, so if there's is no operator in the array then push it and restart the values displayed in the array.
        if (calculationValues[1] != sign){
            calculationValues.push(sign);
            document.getElementById("display").innerHTML = "" // Resets screen so lastNumber can be displayed individually from firstNumber
        }

        else if (buttonContent === '.' && document.getElementById('display').innerHTML.includes('.')){
            return;
        }

        displayElementTwo = document.getElementById("display"); // Grabs the area to display and displays value.
        valueTwo = displayElementTwo.innerHTML += buttonContent;
        console.log('The value 2 is: ' + valueTwo)
    }

    // Check if the clicked element has the class "operator", we don't display the character.
    else if (event.target.classList.contains("operator") && calculationValues.length >= 2) {
            calculationValues.push(parseFloat(valueTwo))
            operate(calculationValues[0], calculationValues[1], calculationValues[2]);
            valueOne = '';
            valueTwo = '';
            //Anything in display is added to array.
            sign = event.target.value;        
    }

    else if (event.target.classList.contains("equals") && calculationValues.length >=2) {
        calculationValues.push(parseFloat(valueTwo))
        operate(calculationValues[0], calculationValues[1], calculationValues[2]);
        valueOne = '';
        valueTwo = '';
        
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
    console.log('Button content is: ' + buttonContent);
});



//This section is for the keydown

window.addEventListener('keydown', function(e) {
    // Find the button element with a value equal to the key pressed
    const key = document.querySelector(`button[value='${e.key}']`);
    
    // Simulate a click on the button if the key element exists
    if (key) {
        key.click();
    }
});