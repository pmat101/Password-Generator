const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
})

generateEl.addEventListener('click', () => {
    resultEl.innerText = generatePassword(lowercaseEl, uppercaseEl, numbersEl, symbolsEl, lengthEl);

})

function generatePassword(lower, upper, number, symbol, length) {
    if (!lower.checked)
        delete randomFunc.lower;
    if (!upper.checked)
        delete randomFunc.upper;
    if (!number.checked)
        delete randomFunc.number;
    if (!symbol.checked)
        delete randomFunc.symbol;
    let password = [];
    for (let i = 0; i < length.value; i++) {
        let randomNum = Math.floor(Math.random() * Object.keys(randomFunc).length);
        let arrayOfKeys = Object.keys(randomFunc);
        let randomKey = arrayOfKeys[randomNum];
        password.push(randomFunc[randomKey].call());
    }
    return password.join("");
}

function getRandomLower() {
    let x = Math.floor(Math.random() * (123 - 97)) + 97;
    return String.fromCharCode(x);
}

function getRandomUpper() {
    let x = Math.floor(Math.random() * (91 - 65)) + 65;
    return String.fromCharCode(x);
}

function getRandomNumber() {
    let x = Math.floor(Math.random() * (58 - 48)) + 48;
    return String.fromCharCode(x);
}

function getRandomSymbol() {
    do {
        let x = Math.floor(Math.random() * (127 - 33)) + 33;
        if ((x >= 48 && x < 58) || (x >= 65 && x < 91) || (x >= 97 && x < 123))
            continue;
        else
            return String.fromCharCode(x);
    } while (1)
}
