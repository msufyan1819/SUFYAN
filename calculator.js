// script.js
let currentInput = '';
let operator = '';
let firstInput = '';
let secondInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;  // Prevent appending operator when input is empty
    if (firstInput === '') {
        firstInput = currentInput;
        currentInput = '';
    }
    operator = op;
}

function clearDisplay() {
    currentInput = '';
    firstInput = '';
    secondInput = '';
    operator = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    if (firstInput === '' || currentInput === '') return;  // Ensure both inputs are present
    secondInput = currentInput;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(firstInput) + parseFloat(secondInput);
            break;
        case '-':
            result = parseFloat(firstInput) - parseFloat(secondInput);
            break;
        case '*':
            result = parseFloat(firstInput) * parseFloat(secondInput);
            break;
        case '/':
            if (secondInput === '0') {
                alert('Cannot divide by zero');
                return;
            }
            result = parseFloat(firstInput) / parseFloat(secondInput);
            break;
        default:
            return;
    }
    document.getElementById('display').value = result;
    firstInput = result.toString();
    currentInput = '';
    operator = '';
}
