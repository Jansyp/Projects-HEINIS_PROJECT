// Prevent crash if function does not exist
if (typeof stop3dAutoRotate === "function") {
  window.addEventListener('carousel3d-stop-auto', stop3dAutoRotate);
}

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  let started = false;

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = +counter.dataset.target;
      let current = 0;
      const increment = target / 80;

      const update = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(update);
        } else {
          counter.textContent = target;
        }
      };
      update();
    });
  };

  const experienceSection = document.getElementById("experience-section");
  if (!experienceSection) return;

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      animateCounters();
      observer.disconnect();
    }
  }, { threshold: 0.4 });

  observer.observe(experienceSection);
});
