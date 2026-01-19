// Mobile nav toggle and contact form handling (local)
document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');
  if(toggle){
    toggle.addEventListener('click', function(){
      nav.classList.toggle('open');
    });
  }

  var form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var status = document.getElementById('form-status');
      status.textContent = 'Sending...';
      setTimeout(function(){
        status.textContent = 'Thank you — your message was sent (demo).';
        form.reset();
      },700);
    });
  }
});
