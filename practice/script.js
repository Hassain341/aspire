$(document).ready(function() {
    $('#loginForm').submit(function(e) {
      e.preventDefault();
  
     
      var username = $('#username').val().trim();
      var password = $('#password').val().trim();
  
      
      if (username === 'user' && password === 'password') {
        showLoginAlert('Login successful!');
      } else {
        showLoginAlert('Invalid username or password.');
      }
    });
  
   
    function showLoginAlert(message) {
      $('#alertContent').text(message);
      $('#loginAlert').fadeIn().delay(3000).fadeOut();
    }
  });
  