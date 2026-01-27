// Carousel drag, swipe, and auto-slide logic for radio-button-based slider
(function() {
  const slider = document.getElementById('slider');
  const radios = Array.from(slider.querySelectorAll('input[type="radio"][name="slider"]'));
  const slides = Array.from(slider.querySelectorAll('label[id^="slide"]'));
  let current = radios.findIndex(r => r.checked);
  let startX = 0, isDragging = false, autoSlideTimer = null, pauseAuto = false;

  function setSlide(idx) {
    if (idx < 0) idx = radios.length - 1;
    if (idx >= radios.length) idx = 0;
    radios[idx].checked = true;
    current = idx;
  }

  function nextSlide() { setSlide(current + 1); }
  function prevSlide() { setSlide(current - 1); }

  // Mouse/touch drag events
  function onDragStart(e) {
    pauseAuto = true;
    isDragging = true;
    startX = e.touches ? e.touches[0].clientX : e.clientX;
    slider.classList.add('dragging');
    clearTimeout(autoSlideTimer);
  }
  function onDragMove(e) {
    if (!isDragging) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const dx = x - startX;
    if (Math.abs(dx) > 40) {
      if (dx < 0) nextSlide();
      else prevSlide();
      isDragging = false; // Prevent further transitions until new drag
      setTimeout(() => { pauseAuto = false; autoSlide(); }, 2000);
      slider.classList.remove('dragging');
    }
  }
  function onDragEnd() {
    isDragging = false;
    slider.classList.remove('dragging');
    setTimeout(() => { pauseAuto = false; autoSlide(); }, 2000);
  }

  slider.addEventListener('mousedown', onDragStart);
  slider.addEventListener('touchstart', onDragStart, {passive:true});
  window.addEventListener('mousemove', onDragMove);
  window.addEventListener('touchmove', onDragMove, {passive:true});
  window.addEventListener('mouseup', onDragEnd);
  window.addEventListener('touchend', onDragEnd);

  // Auto-slide logic
  function autoSlide() {
    if (pauseAuto) return;
    autoSlideTimer = setTimeout(() => {
      nextSlide();
      autoSlide();
    }, 4000);
  }
  autoSlide();

  // Pause and stop auto-slide on manual radio click
  radios.forEach((radio, idx) => {
    radio.addEventListener('change', () => {
      pauseAuto = true;
      clearTimeout(autoSlideTimer);
      // Notify 3D carousel to update current index and stop auto-rotate
      window.dispatchEvent(new CustomEvent('carousel3d-set-current', { detail: { idx } }));
      window.dispatchEvent(new CustomEvent('carousel3d-stop-auto'));
    });
  });
})();
