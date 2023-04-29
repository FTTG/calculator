const numbers = document.querySelectorAll('.number-key');
const topDisplay = document.querySelector('#top-display');
const botDisplay = document.querySelector('#bottom-display');
const operators = document.querySelectorAll('.operator');
const clearButton = document.querySelector('#clear');
const equal = document.querySelector('#equal');

const operatorArray = ['+', '-', 'x', '÷'];

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
    if (!operatorArray.some(inc => topDisplay.textContent.includes(inc))) {
        botDisplay.textContent = topDisplay.textContent;
        return;
    }
    let arrayToOperate = topDisplay.textContent.split(/([\+\-x÷])/g);
    let result;
    console.log(arrayToOperate);
    switch (arrayToOperate[1]) {
        case '+':
            result = add(arrayToOperate[0], arrayToOperate[2]);
            break;
        case '-':
            result = subtract(arrayToOperate[0], arrayToOperate[2]);
            break;
        case 'x':
            result = multiply(arrayToOperate[0], arrayToOperate[2]);
            break;
        case '÷':
            result = divide(arrayToOperate[0], arrayToOperate[2]);
            break;
    }
    botDisplay.textContent = result;
}

function add(n1, n2) {
    return +n1 + +n2;
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