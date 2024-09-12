function rollDice(resultId) {
    const result = Math.floor(Math.random() * 20) + 1;
    document.getElementById(resultId).textContent = `Risultato: ${result}`;
}

document.addEventListener('DOMContentLoaded', function() {
    const numericInputs = document.querySelectorAll('.numeric-input');
    
    numericInputs.forEach(input => {
        input.addEventListener('input', function() {
            const value = this.value;
            const isNumeric = /^\d*$/.test(value);
            const errorMessage = document.getElementById(this.id + '-error');
            
            if (!isNumeric) {
                errorMessage.style.display = 'inline';
            } else {
                errorMessage.style.display = 'none';
            }
        });
    });
});