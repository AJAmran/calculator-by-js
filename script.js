let currentValue = "";
let operatorClicked = false;
let lastOperator = "";
let lastValue = "";

function updateDisplay() {
  const display = document.getElementById("display");
  display.value = currentValue || "0";
}

function appendValue(value) {
  if (operatorClicked) {
    currentValue = "";
    operatorClicked = false;
  }

  currentValue += value;
  updateDisplay();
}

function calculate() {
  if (currentValue === "" || operatorClicked) return;
  currentValue = currentValue.replace(/÷/g, "/");
  currentValue = currentValue.replace(/x/g, "*");
  currentValue = currentValue.replace(/−/g, "-");
  const result = eval(currentValue);
  currentValue = result.toString();
  updateDisplay();
}
function clearDisplay() {
  currentValue = "";
  updateDisplay();
}

function deleteValue() {
  currentValue = currentValue.slice(0, -1);
  updateDisplay();
}

function calculatePercentage() {
  if (currentValue === "") return;
  currentValue = (parseFloat(currentValue) / 100).toString();
  updateDisplay();
}

function calculateSquare() {
  if (currentValue === "") return;
  currentValue = (parseFloat(currentValue) ** 2).toString();
  updateDisplay();
}

updateDisplay();

// function calculatePercentage(){

// }
