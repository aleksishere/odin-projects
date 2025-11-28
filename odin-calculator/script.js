let firstNumber;
let secoundNumber;
let operator;
let result;
const buttons = Array.from(document.querySelectorAll('button'));
const btn = Array.from(document.querySelectorAll('.number'));
const operators = Array.from(document.querySelectorAll('.operate'));
const display = document.getElementById('display');
const clear = document.getElementById('clear');
const equal = document.getElementById('doMath');
const point = document.getElementById("point");

function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return (a/b).toFixed(2);
}

function operate(operator,a,b) {
    if(operator == 'add') {
        resetDisplay()
        return add(a,b);
    }
    if(operator == 'subtract') {
        resetDisplay()
        return subtract(a,b);
    }
    if(operator == 'multiply') {
        resetDisplay()
        return multiply(a,b);
    }
    if(operator == 'divide') {
        if(a == 0 || b == 0) {
            return "0";
        } else {
            resetDisplay()
            return divide(a,b);
        }
    }
}

function resetDisplay() {
    buttons.forEach(button => button.addEventListener("click", resetDisplayDetect),true);
}

function resetDisplayDetect() {
    display.innerText = '';
    buttons.forEach(button => button.removeEventListener("click", resetDisplayDetect),true);
}


function changeDisplay() {
    if(this.textContent == "0" && display.innerText == '' && operator === undefined) return false; //Check if first number is 0
    if(this.textContent == '.' && display.innerText.includes('.')) return false;
    if(this.textContent == '.' && display.innerText == '') display.innerText = 0.;
    display.innerText = display.innerText + this.textContent;
}

function saveOperator() {
    if(display.innerText == '' || display.innerText =='0') return false; //Prevent clicking multiple signs
    firstNumber = display.innerText;
    operator = this.id;
    display.innerText = '';
}

function clearText() {
    display.innerText = display.innerText.slice(0, -1); //Clear function
}

function doMath() {
    secoundNumber = display.innerText;
    if(secoundNumber === '') { //Secound number can't be null
        return false;
    }
    display.innerText = operate(operator, Number(firstNumber), Number(secoundNumber));
    firstNumber = 0;
    secoundNumber = 0;
}

point.addEventListener('click', changeDisplay);
clear.addEventListener('click', clearText);
btn.forEach(button => button.addEventListener("click", changeDisplay));
operators.forEach(operator => operator.addEventListener("click", saveOperator));
equal.addEventListener("click", doMath);

