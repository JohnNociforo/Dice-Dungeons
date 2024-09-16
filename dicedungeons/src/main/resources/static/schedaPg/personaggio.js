const diceSound = new Audio('dado.mp3');

function rollDice(resultId, button) {

    diceSound.play();

    const result = Math.floor(Math.random() * 20) + 1;
    document.getElementById(resultId).textContent = `Risultato: ${result}`;
    
    button.classList.add('active');
    setTimeout(() => button.classList.remove('active'), 300);
}

function rollD4(resultId) {

    const result = Math.floor(Math.random() * 4) + 1; // Tira un dado D4

    document.getElementById(resultId).textContent = `Risultato: ${result}`;

}

function rollD6(resultId) {

    const result = Math.floor(Math.random() * 6) + 1; // Tira un dado D6

    document.getElementById(resultId).textContent = `Risultato: ${result}`;

}

function rollD8(resultId) {

    const result = Math.floor(Math.random() * 8) + 1; // Tira un dado D8

    document.getElementById(resultId).textContent = `Risultato: ${result}`;

}

function rollD10(resultId) {

    const result = Math.floor(Math.random() * 10) + 1; // Tira un dado D10

    document.getElementById(resultId).textContent = `Risultato: ${result}`;

}
function rollD12(resultId) {

    const result = Math.floor(Math.random() * 12) + 1; // Tira un dado D12

    document.getElementById(resultId).textContent = `Risultato: ${result}`;

}

function rollD100(resultId) {

    const result = Math.floor(Math.random() * 100) + 1; // Tira un dado D100

    document.getElementById(resultId).textContent = `Risultato: ${result}`;

}

function updateCalculations() {
    const costituzione = parseInt(document.getElementById('costituzione').value) || 0;
    const destrezza = parseInt(document.getElementById('destrezza').value) || 0;

    const armorClass = calculateArmorClass(costituzione);
    const iniziativa = calculateIniziativa(destrezza);

    document.getElementById('armor-class-result').textContent = `Armor Class: ${armorClass}`;
    document.getElementById('initiative-result').textContent = `Iniziativa: ${iniziativa}`;

    //mettiamo i valori nei campi input nascosti
    document.getElementById('armorclass').value = armorClass;
    document.getElementById('iniziativa').value = iniziativa;
}

function calculateArmorClass(costituzione) {
    if (costituzione >= 8 && costituzione <= 9) return -1;
    if (costituzione >= 10 && costituzione <= 11) return 0;
    if (costituzione >= 12 && costituzione <= 13) return 1;
    if (costituzione >= 14 && costituzione <= 15) return 2;
    if (costituzione >= 16 && costituzione <= 17) return 3;
    if (costituzione >= 18 && costituzione <= 19) return 4;
    if (costituzione === 20) return 5;
    return 0;
}

function calculateIniziativa(destrezza) {
    if (destrezza >= 8 && destrezza <= 9) return -1;
    if (destrezza >= 10 && destrezza <= 11) return 0;
    if (destrezza >= 12 && destrezza <= 13) return 1;
    if (destrezza >= 14 && destrezza <= 15) return 2;
    if (destrezza >= 16 && destrezza <= 17) return 3;
    if (destrezza >= 18 && destrezza <= 19) return 4;
    if (destrezza === 20) return 5;
    return 0;
}

function creaPersonaggio() {
    const form = document.getElementById('creazionescheda');

    const inputs = form.querySelectorAll('input, textarea');
    let form_valido = true;
    let errorMessage = '';

    const errorMessageElement = document.getElementById('error-message');
    inputs.forEach(input => {
        input.classList.remove('invalid');

        if (input.hasAttribute("required") && (input.value == null || input.value == undefined || input.value.trim() === '')) {
            form_valido = false;
            errorMessage += `Riempire il campo ${input.name}.<br>`;
            input.classList.add('invalid');
        }
    });

    if (form_valido) {
        //TODO: mandare la richiesta a spring
    } else {
        errorMessageElement.innerHTML = errorMessage;
    }
}