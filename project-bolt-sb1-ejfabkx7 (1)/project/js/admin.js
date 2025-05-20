document.addEventListener('DOMContentLoaded', function() {
  // Check if already logged in
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  
  // If on login page and already logged in, redirect to dashboard
  if (document.getElementById('loginBtn') && isLoggedIn === 'true') {
    window.location.href = 'dashboard.html';
    return;
  }
  
  // Login functionality
  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', function() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const errorMessage = document.getElementById('loginError');
      
      // Validate credentials (hardcoded for simplicity)
      if (email === 'admin@admin.com' && password === 'admin123') {
        // Set logged in status
        sessionStorage.setItem('isLoggedIn', 'true');
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
      } else {
        // Show error message
        errorMessage.textContent = 'Email ou senha incorretos. Tente novamente.';
        errorMessage.style.display = 'block';
      }
    });
    
    // Allow Enter key to submit login
    document.getElementById('password').addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        loginBtn.click();
      }
    });
  }
});