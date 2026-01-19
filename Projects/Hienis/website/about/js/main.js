// Mobile nav toggle for About
document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');
  if(toggle){
    toggle.addEventListener('click', function(){
      nav.classList.toggle('open');
    });
  }
});
});
