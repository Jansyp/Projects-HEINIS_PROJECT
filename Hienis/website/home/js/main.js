  window.addEventListener('carousel3d-stop-auto', stop3dAutoRotate);
// Product slider auto-scroll and arrow navigation
document.addEventListener('DOMContentLoaded', function() {
  // Dynamically load productsData
  const track = document.getElementById('productSliderTrack');
  const prev = document.getElementById('productSliderPrev');
  const next = document.getElementById('productSliderNext');
  let autoScrollInterval;

  // Helper to create a product card
  function createProductCard(product) {
    const card = document.createElement('article');
    card.className = 'card product-card';
    card.innerHTML = `
      <img src="../products/images/${product.image}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <p>${product.shortDescription}</p>
      <a href="${product.pageUrl}" class="btn">Read More</a>
    `;
    return card;
  }

  // Render all products
  function renderProducts() {
    track.innerHTML = '';
    productsData.forEach(product => {
      track.appendChild(createProductCard(product));
    });
  }

  // If productsData is not global, load it
  if (typeof productsData === 'undefined') {
    const script = document.createElement('script');
    script.src = '../../js/productsData.js'; // fallback for local
    // Try GitHub Pages path if not found
    script.onerror = function() {
      script.src = '/Projects-HEINIS_PROJECT/Hienis/js/productsData.js';
      document.head.appendChild(script);
    };
    script.onload = renderProducts;
    document.head.appendChild(script);
  } else {
    renderProducts();
  }

  function scrollByCard(dir = 1) {
    const card = track.querySelector('.product-card');
    if (!card) return;
    const scrollAmount = card.offsetWidth + 32; // card width + gap
    track.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' });
  }

  prev.addEventListener('click', () => scrollByCard(-1));
  next.addEventListener('click', () => scrollByCard(1));

  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      // If at end, scroll to start
      if (track.scrollLeft + track.offsetWidth >= track.scrollWidth - 10) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollByCard(1);
      }
    }, 2500);
  }
  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }
  track.addEventListener('mouseenter', stopAutoScroll);
  track.addEventListener('mouseleave', startAutoScroll);
  startAutoScroll();
});
// 3D Rotating Slider Animation
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slider .slide');
  let current = 0;
  const total = slides.length;
  let intervalId;

  function rotateSlider(idx) {
    const angle = (360 / total) * idx;
    slider.style.transform = `rotateY(-${angle}deg)`;
    current = idx;
  }

  function nextSlide() {
    rotateSlider((current + 1) % total);
  }

  function prevSlide() {
    rotateSlider((current - 1 + total) % total);
  }

  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');

  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Auto-rotate every 4 seconds
  intervalId = setInterval(nextSlide, 4000);

  // Pause on hover
  slider.addEventListener('mouseenter', () => clearInterval(intervalId));
  slider.addEventListener('mouseleave', () => {
    intervalId = setInterval(nextSlide, 4000);
  });

  // Initialize
  rotateSlider(0);
});
