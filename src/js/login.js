function storeUser() {
  // Implemente a lógica de armazenamento do usuário aqui, se necessário
  // Esta função pode ser implementada no arquivo de cadastro.js
}

function checkUser() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Obter os usuários do localStorage
  var usuariosCadastrados = localStorage.getItem('usuarios') || [];

  // Verificar se o usuário existe
  var usuarioExistente = usuariosCadastrados.find(function(usuario) {
      return usuario.email === email && usuario.senha === password;
  });

  if (usuarioExistente) {
      alert('Login bem-sucedido!');
      // Redirecionar ou realizar outras ações após o login bem-sucedido
      window.location.replace("index.html");
  } else {
      alert('Email ou senha incorretos. Por favor, tente novamente.');
  }
}

// Adicionar um listener para o botão de login
document.getElementById('btnSubmit').addEventListener('click', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Chama as funções storeUser e checkUser
  storeUser();
  checkUser();
});

