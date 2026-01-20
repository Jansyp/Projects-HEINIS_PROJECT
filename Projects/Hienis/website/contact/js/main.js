// Contact form handling only
document.addEventListener('DOMContentLoaded', function(){
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
