let currentValue = '';
let operatorClicked = false;


function updateDisplay(){
    const display = document.getElementById('display');
    display.value = currentValue || '0';
}

function appendValue(value){
    if(operatorClicked){
        currentValue = '';
        operatorClicked = false;
    }

    currentValue += value;
    updateDisplay();
}


function calculate(){
    if(currentValue === '' || operatorClicked){
        const result = eval(currentValue);
        currentValue = result.toString();
        updateDisplay();
    }
}

function clearDisplay(){
    currentValue = '';
    updateDisplay();
}

function deleteValue(){
    currentValue = currentValue.slice(0, -1);
    updateDisplay();
}


updateDisplay();

// function calculatePercentage(){
    
// }