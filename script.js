const numbers = document.querySelectorAll('.number-key');
const topDisplay = document.querySelector('#top-display');
const botDisplay = document.querySelector('#bottom-display');
const operators = document.querySelectorAll('.operator');
const clearButton = document.querySelector('#clear');
const equal = document.querySelector('#equal');

const operatorArray = ['+', '-', 'x', '&#247;'];

let num1;
let num2;

for (let number of numbers) number.addEventListener('click', addToDisplay);

for (let operator of operators) operator.addEventListener('click', checkForOperand);

clearButton.addEventListener('click', clearScreen);
equal.addEventListener('click', operate);

function addToDisplay() {
    console.log(this);
    if (topDisplay.textContent == '0') {
        topDisplay.textContent = this.textContent;
        return;
    }
    topDisplay.textContent = topDisplay.textContent + this.textContent;
}

function checkForOperand() {
    let result;
    console.log(this);
    if (operatorArray.some(inc => topDisplay.textContent.includes(inc))) {
        result = operate();
    }
    addToDisplay.call(this);
}

function operate(n1, n2, symbol) {
    console.log('working bby');

}

function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function clearScreen() {
    topDisplay.textContent = '';
    botDisplay.textContent = '0';
}