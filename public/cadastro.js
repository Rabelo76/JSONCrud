function enviarDados(event) {

    // Impede recarregar a página
    if (event) event.preventDefault();

    //Obter os valores dos campos informados pelo usuário
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var cpf = document.getElementById('identificadorCPF').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var rua = document.getElementById('rua').value;
    var cep = document.getElementById('cep').value;
    var cidade = document.getElementById('cidade').value;
    var estado = document.getElementById('estado').value;
    var telefone = document.getElementById('telefone').value;

    //Enviar ao json-server
    fetch("http://localhost:3000/pessoas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            sobrenome: sobrenome,
            cpf: cpf,
            email: email,
            senha: senha,
            rua: rua,
            cep: cep,
            cidade: cidade,
            estado: estado,
            telefone: telefone
        })
    })
    .then(res => res.json())
    .then(data => {
        alert("Cadastro realizado com sucesso!");
        window.location.href = "Login.html";
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Erro ao cadastrar!");
    });
}
