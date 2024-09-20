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
                // Create the character card
                const card = document.createElement('div');
                card.classList.add('character-card');

                // Create the heading
                const heading = document.createElement('div');
                heading.classList.add('heading');

                const nameElement = document.createElement('h2');
                //make it so it's not inside the h2
                nameElement.textContent = `${character.nome}`;

                const playerLabel = document.createElement('label');
                playerLabel.textContent = `${character.player}`;

                const imgElement = document.createElement('img');
                imgElement.src = character.imageurl;
                imgElement.alt = "Character Image";
                imgElement.classList.add('character-image');

                heading.appendChild(nameElement);
                heading.appendChild(playerLabel);
                heading.appendChild(imgElement);

                // Create the info section
                const infoSection = document.createElement('div');
                infoSection.classList.add('info-section');

                const leftColumn = document.createElement('div');
                leftColumn.classList.add('left-column');
                const razzaLabel = document.createElement('label');
                razzaLabel.textContent = 'Razza:';
                const razzaValue = document.createElement('span');
                razzaValue.textContent = character.razza;
                leftColumn.appendChild(razzaLabel);
                leftColumn.appendChild(razzaValue);

                const classeLabel = document.createElement('label');
                classeLabel.textContent = 'Classe:';
                const classeValue = document.createElement('span');
                classeValue.textContent = character.classe;
                leftColumn.appendChild(classeLabel);
                leftColumn.appendChild(classeValue);

                const livelloLabel = document.createElement('label');
                livelloLabel.textContent = 'Livello:';
                const livelloValue = document.createElement('span');
                livelloValue.textContent = character.livello;
                leftColumn.appendChild(livelloLabel);
                leftColumn.appendChild(livelloValue);

                const rightColumn = document.createElement('div');
                rightColumn.classList.add('right-column');

                const allineamentoLabel = document.createElement('label');
                allineamentoLabel.textContent = 'Allineamento:';
                const allineamentoValue = document.createElement('span');
                allineamentoValue.textContent = character.allineamento;
                rightColumn.appendChild(allineamentoLabel);
                rightColumn.appendChild(allineamentoValue);

                const hpLabel = document.createElement('label');
                hpLabel.textContent = 'Punti Vita:';
                const hpValue = document.createElement('span');
                hpValue.textContent = character.hp;
                rightColumn.appendChild(hpLabel);
                rightColumn.appendChild(hpValue);

                const backgroundLabel = document.createElement('label');
                backgroundLabel.textContent = 'Background:';
                const backgroundValue = document.createElement('span');
                backgroundValue.textContent = character.background || 'N/A';
                rightColumn.appendChild(backgroundLabel);
                rightColumn.appendChild(backgroundValue);

                infoSection.appendChild(leftColumn);
                infoSection.appendChild(rightColumn);

                // Create attributes section
                const attributes = document.createElement('div');
                attributes.classList.add('attributes');

                const attrLabels = ['Forza', 'Destrezza', 'Costituzione', 'Intelligenza', 'Saggezza', 'Carisma'];
                const attrValues = [
                    character.forza,
                    character.destrezza,
                    character.costituzione,
                    character.intelligenza,
                    character.saggezza,
                    character.carisma
                ];

                attrLabels.forEach((label, index) => {
                    const attribute = document.createElement('div');
                    attribute.classList.add('attribute');

                    const labelElement = document.createElement('label');
                    labelElement.textContent = `${label}:`;
                    attribute.appendChild(labelElement);

                    const valueElement = document.createElement('span');
                    valueElement.textContent = attrValues[index];
                    attribute.appendChild(valueElement);

                    attributes.appendChild(attribute);
                });

                // ArmorClass
                const armorSection = document.createElement('div');
                armorSection.classList.add('armor-section');

                const armorClassLabel = document.createElement('label');
                armorClassLabel.textContent = 'Armor Class:';
                armorSection.appendChild(armorClassLabel);

                const armorClassValue = document.createElement('span');
                armorClassValue.textContent = `${character.armorClass}`;
                armorSection.appendChild(armorClassValue);

                // Iniziativa
                const iniziativaSection = document.createElement('div');
                iniziativaSection.classList.add('iniziativa-section');

                const iniziativaLabel = document.createElement('label');
                iniziativaLabel.textContent = 'Iniziativa:';
                iniziativaSection.appendChild(iniziativaLabel);

                const iniziativaValue = document.createElement('span');
                iniziativaValue.textContent = `${character.iniziativa}`;
                iniziativaSection.appendChild(armorClassValue);

                // Group Equipaggiamento, Carattere, Ideali
                const miscSection = document.createElement('div');
                miscSection.classList.add('misc-section');

                // Create equipment section
                const equipmentSection = document.createElement('div');
                equipmentSection.classList.add('equipment-section');

                const equipmentLabel = document.createElement('label');
                equipmentLabel.textContent = 'Equipaggiamento:';
                equipmentSection.appendChild(equipmentLabel);

                const equipmentValue = document.createElement('span');
                equipmentValue.textContent = character.equipaggiamento || 'N/A';
                equipmentSection.appendChild(equipmentValue);

                // Create traits section
                const traitsSection = document.createElement('div');
                traitsSection.classList.add('traits-section');

                const carattereLabel = document.createElement('label');
                carattereLabel.textContent = 'Carattere:';
                const carattereValue = document.createElement('span');
                carattereValue.textContent = character.carattere || 'N/A';
                traitsSection.appendChild(carattereLabel);
                traitsSection.appendChild(carattereValue);

                // Create ideals sections
                const idealsSection = document.createElement('div');
                idealsSection.classList.add('ideals-section');

                const idealiLabel = document.createElement('label');
                idealiLabel.textContent = 'Ideali:';
                const idealiValue = document.createElement('span');
                idealiValue.textContent = character.ideali || 'N/A';
                idealsSection.appendChild(idealiLabel);
                idealsSection.appendChild(idealiValue);

                // Group Equipaggiamento, Carattere, Ideali
                miscSection.appendChild(equipmentSection);
                miscSection.appendChild(traitsSection);
                miscSection.appendChild(idealsSection);
                
                // Append all sections to the card
                card.appendChild(heading);
                card.appendChild(infoSection);
                card.appendChild(attributes);
                card.appendChild(miscSection);

                // Append the card to the container
                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching characters:', error);
        });
}

window.onload = loadPersonaggi;