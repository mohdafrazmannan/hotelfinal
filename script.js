document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for "See Full Menu" button and "Menu" nav pill
  const navMenuBtn = document.querySelector('.menu-scroll-btn');
  const menuSection = document.querySelector('.menu-section');

  const scrollToMenu = () => {
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (navMenuBtn) navMenuBtn.addEventListener('click', scrollToMenu);

  // Add to cart interaction removed as per request.

  // Parallax effect on hero images to make it feel alive
  const heroImages = document.querySelector('.hero-images');
  if (heroImages && window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      heroImages.style.transform = `translate(${x * 15 - 7.5}px, ${y * 15 - 7.5}px)`;
    });
  }
});
