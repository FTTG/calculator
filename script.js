const numbers = document.querySelectorAll('.number-key');
const topDisplay = document.querySelector('#top-display');
const botDisplay = document.querySelector('#bottom-display');
const operators = document.querySelectorAll('.operator');
const clearButton = document.querySelector('#clear');
const equal = document.querySelector('#equal');

let newResult = false;

const operatorArray = ['+', '-', 'x', '÷'];

let num1;
let num2;

for (let number of numbers) number.addEventListener('click', addToDisplay);

for (let operator of operators) operator.addEventListener('click', checkForOperand);

clearButton.addEventListener('click', clearScreen);
equal.addEventListener('click', operate);
equal.addEventListener('click', () => newResult = true);

function addToDisplay() {
    // Validate that we are not coming from just giving a result (so need to reset top display)
    if (newResult) {
        newResult = false;
        topDisplay.textContent = '';
    }
    // 
    if (topDisplay.textContent == 0) {
        topDisplay.textContent = this.textContent;
        return;
    }
    topDisplay.textContent = topDisplay.textContent + this.textContent;
}

function checkForOperand() {
    if (newResult) newResult = false;

    if (operatorArray.some(inc => topDisplay.textContent.includes(inc))) {
        operate();
        if (botDisplay.textContent != 'BOOM') {
            topDisplay.textContent = botDisplay.textContent;
        }
        else {
            topDisplay.textContent = ''
            return;
        }
    }
    console.log(topDisplay.textContent);
    // if (topDisplay.textContent == 0) {
    //     topDisplay.textContent = 0;
    // }
    addToDisplay.call(this);
}

function operate(n1, n2, symbol) {
    if (!operatorArray.some(inc => topDisplay.textContent.includes(inc))) {
        botDisplay.textContent = topDisplay.textContent;
        return;
    }
    let arrayToOperate = topDisplay.textContent.split(/([\+\-x÷])/g);
    let result;
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
    if (n2 == 0) {
        setTimeout(() => {
            botDisplay.textContent = '0';
        }, 1000);
        return 'BOOM'
    }
    return n1 / n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function clearScreen() {
    topDisplay.textContent = '';
    botDisplay.textContent = '0';
}