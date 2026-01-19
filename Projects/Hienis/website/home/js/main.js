// Product slider auto-scroll and arrow navigation
document.addEventListener('DOMContentLoaded', function() {
  const track = document.getElementById('productSliderTrack');
  const prev = document.getElementById('productSliderPrev');
  const next = document.getElementById('productSliderNext');
  let autoScrollInterval;

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
// Mobile nav toggle and simple contact form handling (home local)
document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');
  if(toggle){
    toggle.addEventListener('click', function(){
      nav.classList.toggle('open');
    });
  }
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
