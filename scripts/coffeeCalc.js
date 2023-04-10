
// Defining Structure for main variables 
const coffeeCalculation = {
    drink: "",
    input: 0,
    output: 0,
    brewTime: 0,
    ratios: {}
};


// This function is responsible for making sure the input values are in the correct range
function validateInput(value) {
    const ratio = coffeeCalculation.ratios[coffeeCalculation.drink];
    const minInput = ratio.input * 0.8;
    const maxInput = ratio.input * 1.2;

    if (value < minInput || value > maxInput) {
        return `Warning: Input value should be between ${minInput.toFixed(1)} and ${maxInput.toFixed(1)} grams for the best coffee experience.`;
    } else {
        return "";
    }
}


// This function sets the ratio for input to output based on the drink
function setRatios() {
    coffeeCalculation.ratios = {
        singleRistretto: {input: 7, output: 14, brewTime: 20},
        doubleRistretto: {input: 14, output: 28, brewTime: 20},
        singleEspresso: {input: 7, output: 21, brewTime: 25},
        doubleEspresso: {input: 18, output: 36, brewTime: 25}
    };
}


// Initializes the caclulator 
function initialize() {
    setRatios();
    coffeeCalculation.drink = 'singleRistretto';
    calculate();
}

// When a drink is selected this updates the fields and variables
function selectDrink(drink) {
    coffeeCalculation.drink = drink;
    calculate();
}

// Everytime a input is given this does the calc and updates the UI
function updateInput(customInput) {
    coffeeCalculation.input = customInput;
    calculate();
    updateUI();
}

// Calculates brew time and output grams 
function calculate() {
    const ratio = coffeeCalculation.ratios[coffeeCalculation.drink];
    const input = coffeeCalculation.input || ratio.input;
    const inputRatio = input / ratio.input;
    coffeeCalculation.output = input * (ratio.output / ratio.input);
    coffeeCalculation.brewTime = ratio.brewTime * inputRatio;
}

// Updates the UI elements to the new calculated values
function updateUI() {
    document.getElementById('input').value = coffeeCalculation.input;
    document.getElementById('output').value = coffeeCalculation.output.toFixed(2);
    document.getElementById('brewTime').value = coffeeCalculation.brewTime.toFixed(2);
    document.getElementById('warning').innerText = validateInput(coffeeCalculation.input); // Display warning if needed
}

// Listens for events and calls proper functions
function attachEventListeners() {
    const drinkSelection = document.getElementById('drinkSelection');
    const inputField = document.getElementById('input');

    // Listening for update to drink
    drinkSelection.addEventListener('change', (e) => {
        selectDrink(e.target.value);
        updateInput(coffeeCalculation.ratios[coffeeCalculation.drink].input); // Set default input value based on the selected drink
    });

    // Listening for input in input field 
    inputField.addEventListener('input', (e) => {
        const inputValue = parseFloat(e.target.value);
        updateInput(inputValue);
        document.getElementById('warning').innerText = validateInput(inputValue); // Update the warning message if needed
    });
}


// Main function
function init() {
    initialize();
    attachEventListeners();
    updateInput(coffeeCalculation.ratios[coffeeCalculation.drink].input); // Set default input value
}

// Once the content it loaded the init is called
document.addEventListener('DOMContentLoaded', init);

