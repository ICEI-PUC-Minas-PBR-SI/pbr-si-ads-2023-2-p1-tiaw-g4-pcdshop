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
    }

    // Verificar a veracidade do email e número de tel.
    var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    var phoneRegex = /^\(?([1-9]{2})\)?[-. ]?([2-8]|9[1-9])[0-9]{3}[-. ]?[0-9]{4}$/;

    // Criar uma função para validar o email e o número de telefone
    function validarEmailTelefone (email, telefone) {
    // Obter os elementos dos campos de email e telefone
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('telefone');
  
    // Testar se o email corresponde à expressão regular
    if (emailRegex.test (email)) {
      // Mostrar uma mensagem de sucesso
      console.log ("Email válido.");
      // Limpar a mensagem de validação do campo de email
      emailInput.setCustomValidity('');
    } else {
      // Mostrar uma mensagem de erro
      console.log ("Email inválido.");
      // Definir a mensagem de validação do campo de email
      emailInput.setCustomValidity('Por favor, digite um email válido.');
    }
  
    // Testar se o número de telefone corresponde à expressão regular
    if (phoneRegex.test (telefone)) {
      // Mostrar uma mensagem de sucesso
      console.log ("Número de telefone válido.");
      // Limpar a mensagem de validação do campo de telefone
      phoneInput.setCustomValidity('');
    } else {
      // Mostrar uma mensagem de erro
      console.log ("Número de telefone inválido.");
      // Definir a mensagem de validação do campo de telefone
      phoneInput.setCustomValidity('Por favor, digite um número de telefone válido.');
    }
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
  
    // Validar o email e o número de telefone
    validarEmailTelefone (email, telefone);
  
    // Verificar se o formulário é válido
    if (document.getElementById('form').checkValidity()) {
      // Enviar o formulário
      document.getElementById('form').submit();
    } else {
      // Mostrar uma mensagem de erro
      alert ("Não foi possível cadastrar o usuário. Verifique o email e o número de telefone.");
      return;
    }
  
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



