    function storeUser(nome, data, email, telefone, senha) {
    // Obter os usuários do localStorage
    var usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar se usuariosCadastrados é um array
    if (!Array.isArray(usuariosCadastrados)) {
        usuariosCadastrados = [];
    }

    // Verificar se o email já está cadastrado
    var emailJaCadastrado = false;
    for (var i = 0; i < usuariosCadastrados.length; i++) {
        if (usuariosCadastrados[i].email === email) {
            emailJaCadastrado = true;
            break;
        }
    }

    if (emailJaCadastrado) {
        alert('Email já cadastrado');
        return;
    }

        // Criar um objeto com os dados do usuário
        var novoUsuario = {
            nome: nome,
            dataNascimento: data,
            email: email,
            telefone: telefone,
            senha: senha
        };

        // Adicionar o novo usuário à lista de usuários cadastrados
        usuariosCadastrados.push(novoUsuario);

        // Armazenar a lista atualizada no localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));
        localStorage.setItem('ultimoUsuario', nome);
    }

    // Adicionar um listener para o botão de envio
    document.getElementById('envia').addEventListener('click', function(event) {
        // Evitar que o formulário seja enviado, pois estamos manipulando isso via JavaScript
        event.preventDefault();

        // Obter os valores do formulário
        var nome = document.getElementById('nome').value;
        var data = document.getElementById('data-nascimento').value;
        var email = document.getElementById('email').value;
        var telefone = document.getElementById('telefone').value;
        var senha = document.getElementById('senha').value;
        var confirmarSenha = document.getElementById('confirmar-senha').value;

        // Verificar se as senhas coincidem
        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem. Por favor, tente novamente.');
            return;
        }

        // Calcular a idade a partir da data de nascimento
        var dataNascimento = new Date(data);
        var hoje = new Date();
        var idade = hoje.getFullYear() - dataNascimento.getFullYear();

        // Verificar se a idade é maior ou igual a 18 anos
        if (idade < 18) {
            alert('Não é possível cadastrar menores de 18 anos');
            return;
        }

        // Chama a função storeUser para armazenar o usuário
        storeUser(nome, data, email, telefone, senha);

        // Limpar o formulário
        document.getElementById('form').reset();

        // Redirecionar ou realizar outras ações após o cadastro bem-sucedido
        alert('Usuário cadastrado com sucesso!');
        window.location.href = "login.html";
    });



function cancelar()
{
    // Limpar o formulário
    document.getElementById('form').reset();
    window.location.href = "login.html";
}



