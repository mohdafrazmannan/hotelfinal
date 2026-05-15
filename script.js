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
  let lastScrollY = window.scrollY;

  if (navbar) {
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.classList.add('hidden');
      } else {
        navbar.classList.remove('hidden');
      }
      
      lastScrollY = currentScrollY;
    });
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
