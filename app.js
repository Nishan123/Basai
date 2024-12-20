document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle');
  
    toggle.addEventListener('change', () => {
      const forms = document.querySelector('.forms');
      if (toggle.checked) {
        forms.style.transform = 'translateX(-100%)';
      } else {
        forms.style.transform = 'translateX(0)';
      }
    });
  });
  


let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentIndex) {
      slide.classList.add('active');
    }
  });

  currentIndex = (currentIndex + 1) % totalSlides;
}

setInterval(showSlide, 3000); // Change image every 3 seconds
