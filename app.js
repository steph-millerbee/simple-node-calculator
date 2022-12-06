const readlineSync = require("readline-sync");

var firstNumber = readlineSync.questionInt("What is your first number? ");
readlineSync.setDefaultOptions({limit: ["+", "-", "*", "/"]});
var operator = readlineSync.question("What operation would you like to perform? Please enter +, -, *, or /.  ");
var secondNumber = readlineSync.questionInt("What is your second number? ");


function addition(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtraction(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiplication(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function division(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}


function calculateNums(firstNumber, secondNumber, operator) {
  if(operator === "+") {
    console.log(`The result is: ${addition(firstNumber, secondNumber)}`);
  } 
  else if(operator === "+") {
    console.log(`The result is: ${subtraction(firstNumber, secondNumber)}`);
  } 
  else if(operator === "*") {
    console.log(`The result is: ${multiplication(firstNumber, secondNumber)}`);
  } 
  else if(operator === "/") {
    console.log(`The result is: ${division(firstNumber, secondNumber)}`);
  } 
};

calculateNums(firstNumber, secondNumber, operator);