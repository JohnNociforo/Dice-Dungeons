//LOGO IN APERTURA AL SITO
setTimeout(function(){
    document.getElementById('logo-animation').style.display = 'none';
    document.getElementById('main-content').classList.remove('hidden');
    document.getElementById('main-content').classList.add('fade-in');
}, 3000);

document.addEventListener('DOMContentLoaded', function() {
     const featureItems = document.querySelectorAll('.feature-item');
 
     featureItems.forEach(item => {
         item.addEventListener('mouseover', () => {
             item.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
         });
 
         item.addEventListener('mouseout', () => {
             item.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
         });
     });
 });
 