(function () {
  const slider = document.getElementById('slider');
  const radios = Array.from(slider.querySelectorAll('input[name="slider"]'));

  let startX = 0;
  let isDragging = false;
  let swipeLocked = false;
  let autoSlideTimer = null;
  let pauseAuto = false;

  const SWIPE_THRESHOLD = 60;

  function getCurrentIndex() {
    return radios.findIndex(r => r.checked);
  }

  function setSlide(idx) {
    if (idx < 0) idx = radios.length - 1;
    if (idx >= radios.length) idx = 0;
    radios[idx].checked = true;
  }

  function nextSlide() {
    setSlide(getCurrentIndex() + 1);
  }

  function prevSlide() {
    setSlide(getCurrentIndex() - 1);
  }

  function stopAutoSlide() {
    clearTimeout(autoSlideTimer);
    autoSlideTimer = null;
  }

  function startAutoSlide(delay = 4000) {
    stopAutoSlide();
    autoSlideTimer = setTimeout(function tick() {
      if (!pauseAuto) nextSlide();
      autoSlideTimer = setTimeout(tick, 4000);
    }, delay);
  }

  /* ---------- DRAG / SWIPE ---------- */
  function onDragStart(e) {
    pauseAuto = true;
    stopAutoSlide();

    isDragging = true;
    swipeLocked = false;
    startX = e.touches ? e.touches[0].clientX : e.clientX;

    slider.classList.add('dragging');
  }

  function onDragMove(e) {
    if (!isDragging || swipeLocked) return;

    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const dx = x - startX;

    if (Math.abs(dx) >= SWIPE_THRESHOLD) {
      swipeLocked = true;
      dx < 0 ? nextSlide() : prevSlide();

      setTimeout(() => {
        pauseAuto = false;
        startAutoSlide();
      }, 2000);
    }
  }

  function onDragEnd() {
    isDragging = false;
    swipeLocked = false;
    slider.classList.remove('dragging');
  }

  slider.addEventListener('mousedown', onDragStart);
  slider.addEventListener('touchstart', onDragStart, { passive: true });

  slider.addEventListener('mousemove', onDragMove);
  slider.addEventListener('touchmove', onDragMove, { passive: true });

  slider.addEventListener('mouseup', onDragEnd);
  slider.addEventListener('mouseleave', onDragEnd);
  slider.addEventListener('touchend', onDragEnd);

  /* ---------- RADIO CHANGE ---------- */
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      pauseAuto = true;
      stopAutoSlide();
      setTimeout(() => {
        pauseAuto = false;
        startAutoSlide();
      }, 2000);
    });
  });

  /* ---------- INIT ---------- */
  startAutoSlide();
})();
