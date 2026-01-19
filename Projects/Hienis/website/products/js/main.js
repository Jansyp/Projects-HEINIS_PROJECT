// Mobile nav toggle and small interactions for Products
document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');
  if(toggle){
    toggle.addEventListener('click', function(){
      nav.classList.toggle('open');
    });
  }
  // Cinematic Load More for product details
  var loadMoreBtn = document.getElementById('load-more-btn');
  var fullDesc = document.getElementById('product-full-desc');
  if(loadMoreBtn && fullDesc) {
    loadMoreBtn.addEventListener('click', function() {
      fullDesc.style.display = 'block';
      loadMoreBtn.style.display = 'none';
      fullDesc.classList.add('cinematic-reveal');
    });
  }
});
