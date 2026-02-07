// Contact form handling - Send to WhatsApp
(function() {
  'use strict';
  
  window.addEventListener('DOMContentLoaded', function() {
    console.log('Document loaded - initializing contact form');
    
    var contactForm = document.querySelector('form.contact-modern-form');
    console.log('Contact form found:', contactForm);
    
    if (!contactForm) {
      console.error('Contact form not found!');
      return;
    }
    
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      console.log('Form submit event fired');
      
      var nameInput = document.querySelector('input[name="name"]');
      var emailInput = document.querySelector('input[name="email"]');
      var phoneInput = document.querySelector('input[name="phone"]');
      var messageInput = document.querySelector('textarea[name="message"]');
      
      if (!nameInput || !emailInput || !phoneInput || !messageInput) {
        alert('Form fields not found');
        return;
      }
      
      var visitorName = nameInput.value.trim();
      var visitorEmail = emailInput.value.trim();
      var visitorPhone = phoneInput.value.trim();
      var visitorMessage = messageInput.value.trim();
      
      if (!visitorName || !visitorEmail || !visitorPhone || !visitorMessage) {
        alert('Please fill in all fields');
        return;
      }
      
      console.log('Form values:', { visitorName, visitorEmail, visitorPhone, visitorMessage });
      
      // Build the message
      var fullMessage = 'Name: ' + visitorName + '\nEmail: ' + visitorEmail + '\nPhone: ' + visitorPhone + '\nMessage: ' + visitorMessage;
      
      // WhatsApp number without + symbol (country code 91 for India, then the number)
      var phoneNumber = '919444038255';
      
      // Create WhatsApp link
      var whatsappLink = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(fullMessage);
      
      console.log('WhatsApp link:', whatsappLink);
      console.log('Opening WhatsApp...');
      
      // Open WhatsApp
      window.open(whatsappLink, '_blank');
      
      // Reset the form
      contactForm.reset();
    });
    
  }, false);
})();
