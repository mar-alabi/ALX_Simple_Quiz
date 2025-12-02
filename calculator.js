// Implement arithmetic functions
const operations = {
  add: (number1, number2) => number1 + number2,
  subtract: (number1, number2) => number1 - number2,
  multiply: (number1, number2) => number1 * number2,
  divide: (number1, number2) =>
    number2 === 0 ? "Cannot divide by zero" : number1 / number2,
};
// select the DOM elements
const input1 = document.getElementById("number1");
const input2 = document.getElementById("number2");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const resultSpan = document.getElementById("calculation-result");
const clearButton = document.getElementById("clear-btn");

// add event listeners to the buttons
addButton.addEventListener("click", () => {
  performCalculation(operations.add);
});
subtractButton.addEventListener("click", () => {
  performCalculation(operations.subtract);
});
multiplyButton.addEventListener("click", () => {
  performCalculation(operations.multiply);
});
divideButton.addEventListener("click", () => {
  performCalculation(operations.divide);
});
clearButton.addEventListener("click", clear);

// function to perform the arithmetic operations
function performCalculation(operationFunction) {
  // TODO: Get number1 from input
  const number1 = parseFloat(input1.value) || 0;
  // TODO: Get number2 from input
  const number2 = parseFloat(input2.value) || 0;

  // TODO: Call operationFunction(number1, number2) to get result
  let result = operationFunction(number1, number2);
  // TODO: Display result in resultSpan
  resultSpan.textContent = result;
}

// clear all inputs and results
function clear() {
  // TODO: Clear the input fields (not the numbers!)
  input1.value = "";
  input2.value = "";
  resultSpan.textContent = "0";
}
