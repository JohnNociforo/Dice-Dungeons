// Dati delle notizie fittizie
const newsData = [
    {
        title: "Nuovo manuale di espansione annunciato: 'Mysteries of the Forgotten Realms' ",
        imageUrl: "https://dragonia.it/wp-content/uploads/2024/06/27bcf1c2-35b6-4022-a568-76ebf22401c2.jpg",
        description: "Un nuovo manuale ufficiale di espansione per Dungeons & Dragons è stato annunciato, intitolato 'Mysteries of the Forgotten Realms' Questa espansione introduce nuove razze, classi e misteri che i giocatori possono esplorare, ambientati nei reami perduti."
    },
    {
        title: "Il film di D&D batte record al botteghino",
        imageUrl: "https://keynerd.it/wp-content/uploads/2022/07/DeD-Film-min.jpg",
        description: "L'ultimo film ispirato a Dungeons & Dragons, 'Heroes of the Underdar', ha sorpreso tutti battendo record di incassi nel weekend di apertura. Il film ha raccolto recensioni positive sia dai fan che dalla critica per la sua fedeltà all'universo del gioco e per le sue spettacolari scene d'azione."
    },
    {
        title: "Una campagna di D&D raccoglie fondi per beneficenza",
        imageUrl: "https://preview.redd.it/7y73if73le871.jpg?auto=webp&s=38b7f6adae037bb0d54fa29bc5ad4309ffed39ed",
        description: "Una community di giocatori di Dungeons & Dragons ha raccolto oltre 50.000 euro per beneficenza attraverso una maratona di gioco dal vivo durata 48 ore. L'evento ha coinvolto vari influencer e celebrità appassionati di D&D che hanno partecipato alla campagna."
    },
    {
        title: "Wizards of the Coast annuncia nuove regole per i dungeon master",
        imageUrl: "https://www.smartworld.it/images/2024/06/18/dungeons-dragons-manuali-2024-nuova-edizione-copertina_880x495.jpg",
        description: "Wizards of the Coast ha rilasciato un aggiornamento delle regole per dungeon master, migliorando la gestione delle interazioni sociali e delle trappole. Le nuove regole offrono maggiore flessibilità ai DM, permettendo loro di creare situazioni narrative più dinamiche e coinvolgenti."
    },
    {
        title: "Arriva il nuovo videogioco D&D: 'Tales of the Abyss'",
        imageUrl: "https://sm.ign.com/ign_it/screenshot/default/bg3-druid-screenshots-character-creator-2-ign-1613564027632_k7y5.jpg",
        description: "L'ultimo videogioco ispirato a Dungeons & Dragons,'Tales of the Abyss', è stato ufficialmente lanciato su tutte le piattaforme. Il gioco promette un'esperienza immersiva per gli appassionati di D&D, con una trama intricata e battaglie tattiche a turni ispirate al sistema di gioco classico."
    }
];

// Funzione per generare e inserire le notizie nel DOM
function loadNews() {
    const newsContainer = document.getElementById('news-container');
    
    newsData.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        
        const newsImage = document.createElement('img');
        newsImage.src = news.imageUrl;
        
        const newsContent = document.createElement('div');
        newsContent.classList.add('news-content');
        
        const newsTitle = document.createElement('h2');
        newsTitle.textContent = news.title;
        
        const newsDescription = document.createElement('p');
        newsDescription.textContent = news.description;
        
        newsContent.appendChild(newsTitle);
        newsContent.appendChild(newsDescription);
        
        newsItem.appendChild(newsImage);
        newsItem.appendChild(newsContent);
        
        newsContainer.appendChild(newsItem);
    });
}

// Esegui la funzione al caricamento della pagina
window.onload = loadNews;
