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
 
 function rollD4(resultId, element) {
     const result = Math.floor(Math.random() * 4) + 1;
     document.getElementById(resultId).textContent = "Risultato: " + result;
     animateDice(element);
 }
 
 function rollD6(resultId, element) {
     const result = Math.floor(Math.random() * 6) + 1;
     document.getElementById(resultId).textContent = "Risultato: " + result;
     animateDice(element);
 }
 
 function rollD8(resultId, element) {
     const result = Math.floor(Math.random() * 8) + 1;
     document.getElementById(resultId).textContent = "Risultato: " + result;
     animateDice(element);
 }
 
 function rollD10(resultId, element) {
     const result = Math.floor(Math.random() * 10) + 1;
     document.getElementById(resultId).textContent = "Risultato: " + result;
     animateDice(element);
 }
 
 function rollD12(resultId, element) {
     const result = Math.floor(Math.random() * 12) + 1;
     document.getElementById(resultId).textContent = "Risultato: " + result;
     animateDice(element);
 }
 
 function rollD20(resultId, element) {
     const result = Math.floor(Math.random() * 20) + 1;
     document.getElementById(resultId).textContent = "Risultato: " + result;
     animateDice(element);
 }
 
 function rollD100(resultId, element) {
     const result = Math.floor(Math.random() * 100) + 1;
     document.getElementById(resultId).textContent = "Risultato: " + result;
     animateDice(element);
 }
 

 function animateDice(element) {
     const diceImage = element.querySelector('.dice-roll-menu');
     diceImage.classList.add('active');
 
     setTimeout(() => {
         diceImage.classList.remove('active');
     }, 1000);
 }




