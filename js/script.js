function convertCtoF(c) {
    return (c * 9 / 5) + 32;
}

function convertFtoC(f) {
    return (f - 32) * 5 / 9;
}

const form = document.getElementById('temperature-form');
const inputBox = document.getElementById('celsius-input');
const outputBox = document.getElementById('fahrenheit-output');
const calcBox = document.getElementById('calculation');
const resetBtn = document.getElementById('reset');
const reverseBtn = document.getElementById('reverse');

const inputLabel = document.getElementById('input-label');
const outputLabel = document.getElementById('output-label');
const infoTitle = document.getElementById('info-title');
const infoFormula = document.getElementById('info-formula');
const infoEquation = document.getElementById('info-equation');

let isCtoF = true;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputValue = parseFloat(inputBox.value);

    if (isNaN(inputValue)) {
        alert("Mohon masukkan angka yang valid.");
        return;
    }

    let result, formula;

    if (isCtoF) {
        result = convertCtoF(inputValue);
        outputBox.value = result.toFixed(2);
        formula = `${inputValue}°C × (9/5) + 32 = ${result.toFixed(2)}°F`;
    } else {
        result = convertFtoC(inputValue);
        outputBox.value = result.toFixed(2);
        formula = `(${inputValue}°F - 32) × (5/9) = ${result.toFixed(2)}°C`;
    }

    calcBox.value = formula;
});

resetBtn.addEventListener('click', () => {
    inputBox.value = '';
    outputBox.value = '';
    calcBox.value = '';
});

reverseBtn.addEventListener('click', () => {
    isCtoF = !isCtoF;

    if (isCtoF) {
        inputLabel.textContent = "Celsius (°C):";
        outputLabel.textContent = "Fahrenheit (°F):";
        infoTitle.textContent = "Cara Konversi Dari Celsius (°C) ke Fahrenheit (°F)";
        infoFormula.innerHTML = 'Suhu <em>S</em> dalam derajat Fahrenheit (°F) sama dengan suhu <em>S</em> dalam derajat Celsius (°C) kali <strong>9/5</strong> tambah <strong>32</strong>.';
        infoEquation.innerHTML = "<strong>S(°F) = (S(°C) × 9/5) + 32</strong>";
    } else {
        inputLabel.textContent = "Fahrenheit (°F):";
        outputLabel.textContent = "Celsius (°C):";
        infoTitle.textContent = "Cara Konversi Dari Fahrenheit (°F) ke Celsius (°C)";
        infoFormula.innerHTML = 'Suhu <em>S</em> dalam derajat Celsius (°C) sama dengan suhu <em>S</em> dalam derajat Fahrenheit (°F) dikurangi <strong>32</strong>, dikali <strong>5/9</strong>.';
        infoEquation.innerHTML = "<strong>S(°C) = (S(°F) - 32) × 5/9</strong>";
    }

    inputBox.value = '';
    outputBox.value = '';
    calcBox.value = '';
});
