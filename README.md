# Calculator Project

A simple calculator built with HTML, CSS, and JavaScript. This project demonstrates basic arithmetic operations and includes additional features like decimal input, rounding, and error handling.

## Features

### 1. Basic Arithmetic Operations
The calculator supports the following basic math operations:
- **Addition**
- **Subtraction**
- **Multiplication**
- **Division**

Each operation is implemented as a function (`add()`, `subtract()`, `multiply()`, `divide()`), which can be tested in the browser console.

### 2. Core Calculator Logic
- The calculator processes operations as **[number] [operator] [number]**, for example: `3 + 5`.
- Variables are used to store the first number, the operator, and the second number. These variables will later be used to update the calculator’s display.
- A function `operate()` is implemented to take the operator and two numbers, and call the corresponding math function.

### 3. Basic Calculator UI
- A basic HTML structure includes buttons for:
  - Digits (0-9)
  - Math operations (`+`, `-`, `*`, `/`)
  - Equals (`=`) button
  - Clear (`C`) button
- The calculator has a display area for showing numbers and results. Initially, dummy numbers can be used to test the layout.

### 4. Display Management
- Functions are created to populate the display when number buttons are clicked.
- The display value is stored in a variable for further operations.

### 5. Full Calculator Functionality
- The calculator stores the first and second numbers, the selected operator, and performs the calculation when the user clicks `=` by calling `operate()`.
- After calculating the result, the display is updated with the solution.

### 6. Important Edge Cases
- The calculator evaluates only one operation at a time. For example, pressing `12 + 7 -` will:
  - First calculate `12 + 7 = 19`
  - Then use `19` as the first number for the next operation (`19 - ...`).
- Rounds long decimal answers to prevent overflow on the display.
- Properly handles cases where `=` is pressed before inputting all numbers or operators.
- Pressing `C` clears all data, allowing the user to start fresh.
- Displays an error message when dividing by zero instead of crashing.

## Extra Features

### 1. Decimal Input
- Adds a `.` button for users to input decimal numbers.
- Prevents users from typing more than one decimal point in a number.

### 2. Backspace Button
- Adds a "Backspace" button so the user can delete the last input digit.

### 3. Keyboard Support
- Implements keyboard support for number inputs, operations, and special keys like `Enter` for equals and `Backspace`.

### 4. Custom CSS Styling
- Customize the appearance of the calculator with CSS.
- The calculator's design separates operation buttons from digit buttons, making them visually distinct.

## How to Run

1. Clone the repository.
2. Open `index.html` in your browser.
3. Test the calculator by clicking the buttons or using the keyboard.

## Future Enhancements

- Add more advanced operations like square root or percentage.
- Allow for more complex expressions (e.g., 3 + 5 * 2).