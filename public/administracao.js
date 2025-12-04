// ------------------------ BUSCAR ------------------------
function buscarDados() {
    var cpf = document.getElementById('identificadorCPF').value;

    fetch('https://jsoncrud-d9kr.onrender.com/pessoas/')
        .then(res => res.json())
        .then(dados => {

            let pessoa = dados.find(p => p.cpf == cpf);

            if (pessoa) {
                document.getElementById('identificador').value = pessoa.id;
                document.getElementById('nomeAtualizar').value = pessoa.nome;
                document.getElementById('sobrenomeAtualizar').value = pessoa.sobrenome;
                document.getElementById('emailAtualizar').value = pessoa.email;
                document.getElementById('senhaAtualizar').value = pessoa.senha;
                document.getElementById('ruaAtualizar').value = pessoa.rua;
                document.getElementById('cepAtualizar').value = pessoa.cep;
                document.getElementById('cidadeAtualizar').value = pessoa.cidade;
                document.getElementById('estadoAtualizar').value = pessoa.estado;
                document.getElementById('telefoneAtualizar').value = pessoa.telefone;
            } else {
                alert("Pessoa não encontrada!");
            }
        });
}

// ------------------------ ATUALIZAR ------------------------
function atualizarDados() {
    var id = document.getElementById('identificador').value;

    var dadosAtualizados = {
        cpf: document.getElementById('identificadorCPF').value,
        nome: document.getElementById('nomeAtualizar').value,
        sobrenome: document.getElementById('sobrenomeAtualizar').value,
        email: document.getElementById('emailAtualizar').value,
        senha: document.getElementById('senhaAtualizar').value,
        rua: document.getElementById('ruaAtualizar').value,
        cep: document.getElementById('cepAtualizar').value,
        cidade: document.getElementById('cidadeAtualizar').value,
        estado: document.getElementById('estadoAtualizar').value,
        telefone: document.getElementById('telefoneAtualizar').value
    };

    fetch(`https://jsoncrud-d9kr.onrender.com/pessoas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dadosAtualizados)
    })
    .then(res => res.json())
    .then(() => alert("Atualizado com sucesso!"));
}

// ------------------------ LISTAR TABELA ------------------------
fetch('https://jsoncrud-d9kr.onrender.com/pessoas')
    .then(res => res.json())
    .then(dados => {
        var tabela = document.getElementById('tabela-corpo');

        dados.forEach(pessoa => {
            var tr = document.createElement('tr');

            tr.innerHTML = `
                <td>${pessoa.id}</td>
                <td>${pessoa.nome}</td>
                <td>${pessoa.sobrenome}</td>
                <td>${pessoa.cpf}</td>
                <td>${pessoa.email}</td>
                <td>${pessoa.senha}</td>
                <td>${pessoa.rua}</td>
                <td>${pessoa.cep}</td>
                <td>${pessoa.cidade}</td>
                <td>${pessoa.estado}</td>
                <td>${pessoa.telefone}</td>
            `;

            tabela.appendChild(tr);
        });
    });

// ------------------------ DELETAR ------------------------
function deletarDados() {
    var cpf = document.getElementById('cpfDeletar').value;

    fetch('https://jsoncrud-d9kr.onrender.com/pessoas')
        .then(res => res.json())
        .then(dados => {
            const pessoa = dados.find(p => p.cpf === cpf);

            if (pessoa) {

                fetch(`https://jsoncrud-d9kr.onrender.com/pessoas/${pessoa.id}`, {
                    method: 'DELETE'
                })
                .then(() => alert("Pessoa deletada com sucesso!"));

            } else {
                alert("CPF não encontrado.");
            }
        });
}
