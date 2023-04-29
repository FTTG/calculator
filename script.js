const numbers = document.querySelectorAll('.number-key');
const topDisplay = document.querySelector('#top-display');
const botDisplay = document.querySelector('#bottom-display');
const operator = document.querySelectorAll('.operator');

for (let number of numbers) number.addEventListener('click', addToDisplay);


function addToDisplay() {
    if (botDisplay.textContent == '0') {
        botDisplay.textContent = this.textContent;
        return;
    }
    console.log(botDisplay.textContent);
    console.log(this.textContent);
    botDisplay.textContent = botDisplay.textContent + this.textContent;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}