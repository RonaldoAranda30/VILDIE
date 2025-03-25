// Añadir un efecto de desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
let currentIndex = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
  
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    
    updateCarousel();
}
  
function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}
  
function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
  
// Mueve el carrusel
const offset = -currentIndex * 100;
document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
  
 // Actualiza los dots
dots.forEach(dot => dot.classList.remove('active'));
dots[currentIndex].classList.add('active');
 }
  
// Cambio automático cada 5 segundos
setInterval(() => {
  moveSlide(1);
}, 5000);

// Inicializar el estado de los dots al cargar
document.addEventListener('DOMContentLoaded', updateCarousel);
  

  