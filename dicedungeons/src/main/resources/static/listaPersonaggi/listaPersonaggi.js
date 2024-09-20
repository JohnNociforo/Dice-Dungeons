function loadPersonaggi() {
    fetch('getpersonaggi')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(characters => {
            const container = document.getElementById('character-cards');

            // Clear the container in case it already has content
            container.innerHTML = '';

            characters.forEach(character => {
                // Create a new div element for each character
                const characterDiv = document.createElement('div');
                characterDiv.classList.add('character-card');  // Add a class for styling

                // Create and append an img element for the character image
                const img = document.createElement('img');
                img.src = character.imageurl;
                img.alt = character.nome;
                img.classList.add('character-image');
                characterDiv.appendChild(img);

                // Create and append a h2 element for the character's name
                const name = document.createElement('h2');
                name.textContent = character.nome;
                characterDiv.appendChild(name);

                // Helper function to create and append <p> elements with labels
                function appendParagraph(label, value) {
                    const p = document.createElement('p');
                    const strong = document.createElement('strong');
                    strong.textContent = label;
                    p.appendChild(strong);
                    p.appendChild(document.createTextNode(` ${value}`));
                    characterDiv.appendChild(p);
                }

                // Append paragraphs for each character attribute
                appendParagraph('Classe:', character.classe);
                appendParagraph('Razza:', character.razza);
                appendParagraph('Livello:', character.livello);
                appendParagraph('HP:', character.hp);
                appendParagraph('Iniziativa:', character.iniziativa);
                appendParagraph('Armor Class:', character.armorClass);
                appendParagraph('Forza:', character.forza);
                appendParagraph('Destrezza:', character.destrezza);
                appendParagraph('Costituzione:', character.costituzione);
                appendParagraph('Intelligenza:', character.intelligenza);
                appendParagraph('Saggezza:', character.saggezza);
                appendParagraph('Carisma:', character.carisma);
                appendParagraph('Allineamento:', character.allineamento);
                appendParagraph('Background:', character.background || 'N/A');
                appendParagraph('Equipaggiamento:', character.equipaggiamento || 'N/A');
                appendParagraph('Carattere:', character.carattere || 'N/A');
                appendParagraph('Ideali:', character.ideali || 'N/A');

                // Append the character div to the container
                container.appendChild(characterDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching characters:', error);
        });
}

window.onload = loadPersonaggi;