// Dati delle notizie fittizie
const newsData = [
    {
        title: "La tecnologia 5G arriva in Italia",
        imageUrl: "https://via.placeholder.com/600x400?text=5G+Technology",
        description: "L'Italia ha fatto grandi passi avanti nella distribuzione della tecnologia 5G, portando maggiore velocità di connessione e una vasta gamma di nuove possibilità per i consumatori e le aziende."
    },
    {
        title: "Nuovi progressi nella medicina",
        imageUrl: "https://via.placeholder.com/600x400?text=Medicine+Advancements",
        description: "I ricercatori hanno sviluppato una nuova terapia genetica che potrebbe curare malattie fino ad ora considerate incurabili, aprendo la strada a trattamenti innovativi per milioni di persone."
    },
    {
        title: "Cambiamenti climatici: i governi agiscono",
        imageUrl: "https://via.placeholder.com/600x400?text=Climate+Change+Action",
        description: "Dopo anni di negoziati, i governi di tutto il mondo hanno finalmente raggiunto un accordo su come affrontare il cambiamento climatico, con obiettivi ambiziosi per ridurre le emissioni di carbonio entro il 2030."
    },
    {
        title: "Esplorazione spaziale: Marte più vicino",
        imageUrl: "https://via.placeholder.com/600x400?text=Space+Exploration",
        description: "La NASA ha annunciato una nuova missione su Marte, con l'obiettivo di portare esseri umani sul pianeta rosso entro il 2035. Questo rappresenta un passo fondamentale per l'esplorazione spaziale."
    },
    {
        title: "Nuove scoperte nel mondo dell'intelligenza artificiale",
        imageUrl: "https://via.placeholder.com/600x400?text=Artificial+Intelligence",
        description: "Gli scienziati hanno sviluppato un nuovo algoritmo di intelligenza artificiale che è in grado di apprendere senza l'intervento umano, segnando un enorme progresso nel campo della tecnologia AI."
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
