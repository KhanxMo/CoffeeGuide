const coffeeCalculation = {
    drink: "",
    input: 0,
    output: 0,
    brewTime: 0,
    ratios: {}
};


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

function setRatios() {
    coffeeCalculation.ratios = {
        singleRistretto: {input: 7, output: 14, brewTime: 20},
        doubleRistretto: {input: 14, output: 28, brewTime: 20},
        singleEspresso: {input: 7, output: 21, brewTime: 25},
        doubleEspresso: {input: 18, output: 36, brewTime: 25}
    };
}

function initialize() {
    setRatios();
    coffeeCalculation.drink = 'singleRistretto';
    calculate();
}

function selectDrink(drink) {
    coffeeCalculation.drink = drink;
    calculate();
}

function updateInput(customInput) {
    coffeeCalculation.input = customInput;
    calculate();
    updateUI();
}

/*
function calculate() {
    const ratio = coffeeCalculation.ratios[coffeeCalculation.drink];
    const input = coffeeCalculation.input || ratio.input;
    coffeeCalculation.output = input * (ratio.output / ratio.input);
    coffeeCalculation.brewTime = ratio.brewTime;
}
*/
function calculate() {
    const ratio = coffeeCalculation.ratios[coffeeCalculation.drink];
    const input = coffeeCalculation.input || ratio.input;
    const inputRatio = input / ratio.input;
    coffeeCalculation.output = input * (ratio.output / ratio.input);
    coffeeCalculation.brewTime = ratio.brewTime * inputRatio;
}


function updateUI() {
    document.getElementById('input').value = coffeeCalculation.input;
    document.getElementById('output').value = coffeeCalculation.output.toFixed(2);
    document.getElementById('brewTime').value = coffeeCalculation.brewTime.toFixed(2);
    document.getElementById('warning').innerText = validateInput(coffeeCalculation.input); // Display warning if needed
}


function attachEventListeners() {
    const drinkSelection = document.getElementById('drinkSelection');
    const inputField = document.getElementById('input');

    drinkSelection.addEventListener('change', (e) => {
        selectDrink(e.target.value);
        updateInput(coffeeCalculation.ratios[coffeeCalculation.drink].input); // Set default input value based on the selected drink
    });

    inputField.addEventListener('input', (e) => {
        const inputValue = parseFloat(e.target.value);
        updateInput(inputValue);
        document.getElementById('warning').innerText = validateInput(inputValue); // Update the warning message if needed
    });
}


function init() {
    initialize();
    attachEventListeners();
    updateInput(coffeeCalculation.ratios[coffeeCalculation.drink].input); // Set default input value
}

document.addEventListener('DOMContentLoaded', init);

