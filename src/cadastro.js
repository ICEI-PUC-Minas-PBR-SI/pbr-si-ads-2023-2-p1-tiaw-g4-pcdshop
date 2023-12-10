
function cadastrarUsuario() {
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

    // Verificar se o localStorage já contém dados
    var usuarios = localStorage.getItem('usuarios');
    if (!usuarios) {
        // Se não houver dados, inicializar com um array vazio
        usuarios = { "usuarios": [] };
    } else {
        // Se houver dados, converter a string JSON para um objeto
        usuarios = JSON.parse(usuarios);
    }

    // Criar um novo usuário
    var novoUsuario = {
        "id": usuarios.usuarios.length + 1,
        "nome": nome,
        "data": data,
        "email": email,
        "telefone": telefone,
        "senha": senha
    };

    // Adicionar o novo usuário ao array
    usuarios.usuarios.push(novoUsuario);

    // Atualizar o localStorage com os novos dados
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Limpar o formulário
    document.getElementById('form').reset();

    alert('Usuário cadastrado com sucesso!');
    window.location.href = "index.html";

}

// Adicionar um listener para o botão de envio
document.getElementById('envia').addEventListener('click', cadastrarUsuario);