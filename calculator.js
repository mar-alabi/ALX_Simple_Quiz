// Implement arithmetic functions
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number2 === 0 ? "Cannot divide by zero" : number1 / number2;
}
const input1 = document.getElementById("number1");
const input2 = document.getElementById("number2");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const resultSpan = document.getElementById("calculation-result");
const clearButton = document.getElementById("clear-btn");
addButton.addEventListener("click", () => {
  performCalculation(add);
});
subtractButton.addEventListener("click", () => {
  performCalculation(subtract);
});
multiplyButton.addEventListener("click", () => {
  performCalculation(multiply);
});
divideButton.addEventListener("click", () => {
  performCalculation(divide);
});
clearButton.addEventListener("click", clearInputs);
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
function clearInputs() {
  // TODO: Clear the input fields (not the numbers!)
  input1.value = "";
  input2.value = "";
  resultSpan.textContent = "0";
}
