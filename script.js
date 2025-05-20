document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1000,
    once: true
  });

  // Activa el carrusel automáticamente
  const heroCarousel = document.querySelector('#heroCarousel');
  if (heroCarousel) {
    const carousel = new bootstrap.Carousel(heroCarousel, {
      interval: 5000,
      ride: 'carousel',
      pause: false,
    });
  }
});
