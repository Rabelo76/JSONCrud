function fazerLogin() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    // Login do administrador
    const emailAdm = 'admin@gmail.com';
    const senhaAdm = 'aceSSo';

    if (email === emailAdm && senha === senhaAdm) {
        window.location.href = "administracao.html";
        return;
    }

    // Login dos usuários normais do db.json
    fetch("http://localhost:3000/pessoas")
        .then(res => res.json())
        .then(data => {
            var usuario = data.find(u => u.email === email && u.senha === senha);

            if (usuario) {
                window.location.href = "bemVindo.html";
            } else {
                alert("Email ou senha incorretos. Tente novamente!");
            }
        })
        .catch(err => {
            console.error("Erro ao acessar o servidor:", err);
            alert("Erro ao validar login!");
        });
}
