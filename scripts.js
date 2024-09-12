// scripts.js
function rollDice(resultId) {
    const result = Math.floor(Math.random() * 20) + 1; // Tira un dado D20
    document.getElementById(resultId).textContent = `Risultato: ${result}`;
}
