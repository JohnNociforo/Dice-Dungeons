const diceSound = new Audio('dado.mp3');

function rollDice(resultId, button) {

    diceSound.play();

    const result = Math.floor(Math.random() * 20) + 1;
    document.getElementById(resultId).textContent = `Risultato: ${result}`;
    
    button.classList.add('active');
    setTimeout(() => button.classList.remove('active'), 300);
}

function updateCalculations() {
    const costituzione = parseInt(document.getElementById('costituzione').value) || 0;
    const destrezza = parseInt(document.getElementById('destrezza').value) || 0;

    const armorClass = calculateArmorClass(costituzione);
    const iniziativa = calculateIniziativa(destrezza);

    document.getElementById('armor-class-result').textContent = `Armor Class: ${armorClass}`;
    document.getElementById('initiative-result').textContent = `Iniziativa: ${iniziativa}`;
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