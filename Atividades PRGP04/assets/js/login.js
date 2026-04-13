document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    
    let valid = true;
    if (!email.includes('@')) {
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }
    if (pass.length < 6) {
        document.getElementById('passError').style.display = 'block';
        valid = false;
    }

    if (valid && email === 'admin@prg04.com' && pass === 'admin123') {
        sessionStorage.setItem('auth', 'true');
        window.location.href = 'admin.html';
    } else if (valid) {
        alert('Credenciais incorretas!');
    }
});