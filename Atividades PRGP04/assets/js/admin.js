if (sessionStorage.getItem('auth') !== 'true') {
    window.location.href = 'login.html';
}

function handleLogout() {
    sessionStorage.removeItem('auth');
    window.location.href = 'index.html';
}

document.querySelectorAll('.btn-delete').forEach(btn => {
    btn.addEventListener('click', function() {
        if (confirm('Deseja excluir este registro?')) {
            this.closest('tr').remove();
        }
    });
});
