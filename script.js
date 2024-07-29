let currentNumber = "";
let firstNum = null;
let secondNum = null;
let operator = null;
let result = null;

function addNums(firstNum, secondNum) {
    return firstNum + secondNum;
};

function subtractNums(firstNum, secondNum) {
    return firstNum - secondNum;
};

function multiplyNums(firstNum, secondNum) {
    return firstNum * secondNum;
};

function divideNums(firstNum, secondNum) {
    return firstNum / secondNum;
};

const numberButtonNodeList = document.querySelectorAll("button.number");

const numberButtonArray = [...numberButtonNodeList];

numberButtonArray.forEach(button => {
    button.addEventListener("click", () => {
        updateCurrentNumber(button.textContent);
    });
});

function updateCurrentNumber(number) {
    currentNumber += number;
    let outputText = document.querySelector("h1.output-text");
    outputText.textContent = currentNumber;
    return currentNumber;
}

const operatorButtonNodeList = document.querySelectorAll("button.operator");

const operatorButtonArray = [...operatorButtonNodeList];

operatorButtonArray.forEach(button => {
    button.addEventListener("click", () => {
        if (operator === null) {
            operator = button.textContent;
            let outputText = document.querySelector("h1.output-text");
            firstNum = parseFloat(outputText.textContent);
            currentNumber = "";
            outputText.textContent = "";   
        } else {
            calculate();
        }
    });
});

const equalButton = document.querySelector("button.equals");

equalButton.addEventListener("click", () => {
    calculate();
});

function calculate() {
    if (currentNumber === null) {
        return;
    } else {
        secondNum = parseFloat(currentNumber);
        switch (operator) {
            case '+':
                result = addNums(firstNum, secondNum);
                break;
            case '-':
                result = subtractNums(firstNum, secondNum);
                break;
            case '*':
                result = multiplyNums(firstNum, secondNum);
                break;
            case '/':
                if (secondNum === 0) {
                    result = "Who knows";
                } else {
                    result = divideNums(firstNum, secondNum);
                }
                break;
        }
        let outputText = document.querySelector("h1.output-text");
        outputText.textContent = Math.round((result + Number.EPSILON) * 10000) / 10000;
    
        currentNumber = "";
        firstNum = result;
        secondNum = null;
        operator = null;    
    }
}

const clearButton = document.querySelector("button.clear");

clearButton.addEventListener("click", () => {
    currentNumber = "";
    firstNum = null;
    secondNum = null;
    operator = null;
    result = null;

    let outputText = document.querySelector("h1.output-text");
    outputText.textContent = currentNumber;
});