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

  // Navbar scroll behavior
  const navbar = document.querySelector('.navbar');
  let ticking = false;

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = Math.max(0, window.scrollY);
          
          if (currentScrollY > 80) {
            navbar.classList.add('hidden');
          } else {
            navbar.classList.remove('hidden');
          }
          
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

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
