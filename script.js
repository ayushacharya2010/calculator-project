/* PSEUDOCODE ATTEMPT

CREATE FOUR FUNCTIONS (addNums, subtractNums, multiplyNums, divideNums), 
    FOR THE FOUR MATHEMATICAL OPERATORS, 
    THAT TAKE TWO VALUES (firstNum & secondNum)
    AND COMPUTE ANSWER BASED ON OPERATOR
WHILE NUMBER BUTTON IS NOT CLICKED, 
    DO NOTHING
ONCE NUMBER BUTTON IS CLICKED, 
    DISPLAY THAT NUMBER 
    AND SAVE IT AS A VARIABLE
IF MULTIPLE NUMBER BUTTONS ARE CLICKED IN SUCCESSION,
    UPDATE DISPLAY ACCORDINGLY
    AND APPEND TO THE AFORMENTIONED VARIABLE
ONCE OPERATOR IS CLICKED, 
    SAVE OPERATOR TYPE IN VARIABLE,
    AND CREATE NEW VARIABLE TO HOLD SECOND NUMBER
ONCE EQUALS IS CLICKED, 
    CALL A FUNCTION DEPENDING ON OPERATOR TO COMPUTE ANSWER
    MAKE THE FUNCTION RETURN THE ANSWER
    AND UPDATE THE ANSWER ON THE DISPLAY
IF AN OPERATOR OR THE EQUALS IS CLICKED MULTIPLE TIMES IN SUCCESSION,
    REJECT ALL OPERATOR INPUTS AFTER THE FIRST
IF SCREEN BECOMES FULL BUT THE USER CONTINUES CLICKING NUMBERS, 
    DO NOT DISPLAY MORE ON SCREEN
    BUT UPDATE VARIABLES ACCORDINGLY
IF ANY NUMBER, WHETHER INPUT OR OUTPUT, IS 
    LARGER THAN 9007199254740991
    OR SMALLER THAN -9007199254740991, 
    DISPLAY "ERROR - TOO LARGE"
    AND CLEAR EVERYTHING

*/

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
                    result = "Idiot";
                } else {
                    result = divideNums(firstNum, secondNum);
                }
                break;
        }
        let outputText = document.querySelector("h1.output-text");
        outputText.textContent = result;
    
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