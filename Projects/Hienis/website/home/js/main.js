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
    script.src = '../../js/productsData.js';
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
// Simple hero slider (keep only this part)
document.addEventListener('DOMContentLoaded', function(){
  // Simple hero slider
  var slides = document.querySelectorAll('.hero-slide');
  var current = 0;
  function showSlide(idx){
    current = idx;
    slides.forEach(function(s,i){
      s.classList.toggle('active', i===idx);
      s.style.display = (i===idx) ? 'flex' : 'none';
    });
  }
  if(slides.length){
    showSlide(0);
    var nextBtn = document.querySelector('.hero-next');
    var prevBtn = document.querySelector('.hero-prev');
    if(nextBtn) nextBtn.addEventListener('click', function(e){
      e.preventDefault();
      var nextIdx = (current+1)%slides.length;
      showSlide(nextIdx);
    });
    if(prevBtn) prevBtn.addEventListener('click', function(e){
      e.preventDefault();
      var prevIdx = (current-1+slides.length)%slides.length;
      showSlide(prevIdx);
    });
    setInterval(function(){ showSlide((current+1)%slides.length) }, 6000);
  }
});
