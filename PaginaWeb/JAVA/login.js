
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
   

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    
    
    if (username === '' || password === '') {
      errorMessage.textContent = 'Por favor, completa ambos campos.';
      return;
    }
    
    
    if (username === 'admin' && password === '12345') {
      errorMessage.textContent = '';
     
      window.location.href = "index.html";
    } else {
      errorMessage.textContent = 'Credenciales incorrectas. Inténtalo de nuevo.';
    }
  });
  