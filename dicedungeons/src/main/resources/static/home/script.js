//LOGO IN APERTURA AL SITO
setTimeout(function(){
    document.getElementById('logo-animation').style.display = 'none';
    document.getElementById('main-content').classList.remove('hidden');
    document.getElementById('main-content').classList.add('fade-in');
}, 3000);

//SLIDER
let currentIndex = 0;
let autoSlideInterval;

let slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prevSlide');
prev.addEventListener('click', prevSlide)

const next = document.getElementById('nextSlide');
next.addEventListener('click', nextSlide)

startAutoSlide(); // Avvia lo scorrimento automatico all'avvio

function showSlide(index) {            
const dots = document.querySelectorAll('.dot');

  if (index < 0) {
         index = slides.length - 1;
    } else if (index >= slides.length) {
         index = 0;
    }

    currentIndex = index;

    slides.forEach((slide, i) => {
         slide.classList.toggle('active', i === index);
     });

     dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
       });
  }

function nextSlide() {
      stopAutoSlide();
      showSlide(currentIndex + 1);
 }

function prevSlide() {
       stopAutoSlide();
       showSlide(currentIndex - 1);
}

//FA PARTIRE LO SCORRIMENTO AUTOMANTICO

function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
          nextSlide();
        }, 3000);
 }
 

function stopAutoSlide() {
       clearInterval(autoSlideInterval);
}

// Creazione dinamica dei punti di navigazione
  
const dotsContainer = document.getElementById('dots-container');

for (let i = 0; i < slides.length; i++) {
       const dot = document.createElement('span');
       dot.classList.add('dot');
       dot.addEventListener('click', () => {
             showSlide(i);
             stopAutoSlide();
       });
       dotsContainer.appendChild(dot);
 } 





