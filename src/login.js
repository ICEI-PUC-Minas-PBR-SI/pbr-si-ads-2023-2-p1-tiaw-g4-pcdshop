// Função para armazenar os dados do usuário no local storage
function storeUser () {
  // Obter os valores dos campos do formulário de cadastro
  var email = document.getElementById ("email").value;
  var password = document.getElementById ("password").value;

  // Criar um objeto com os dados do usuário
  var user = {
    email: email,
    password: password
  };

  // Converter o objeto em uma string usando JSON.stringify ()
  var userString = JSON.stringify (user);

  // Armazenar a string no local storage usando o email como chave
  localStorage.setItem (email, userString);
}

// Função para verificar se os dados do usuário estão corretos no local storage
function checkUser () {
  // Obter os valores dos campos do formulário de login
  var email = document.getElementById ("email").value;
  var password = document.getElementById ("password").value;

  // Recuperar a string do local storage usando o email como chave
  var userString = localStorage.getItem (email);

  // Verificar se a string existe
  if (userString) {
    // Converter a string em um objeto usando JSON.parse ()
    var user = JSON.parse (userString);

    // Verificar se a senha digitada é igual à senha armazenada
    if (password === user.password) {
      // Mostrar o email na navbar
      document.getElementById ("offcanvas").innerHTML = "<h4>" + email + "</h4>";
    } else {
      // Mostrar uma mensagem de erro
      alert ("Senha incorreta.");
    }
  } else {
    // Mostrar uma mensagem de erro
    alert ("Email não cadastrado.");
  }
}
  
  // Função para validar as senhas
  function validatePassword () {
    // Obter os valores dos campos de senha e confirmar senha
    var password = document.getElementById ("password").value;
    var confirmPassword = document.getElementById ("confirmPassword").value;

    // Comparar os valores e verificar se são iguais
    if (password === confirmPassword) {
      // Mostrar uma mensagem de sucesso
      alert ("Registrado com sucesso.");
      // Chamar a função storeUser ()
      storeUser ();
    } else {
      // Mostrar uma mensagem de erro
      alert ("As senhas não são iguais.");
      // Retornar false para impedir o envio do formulário
      return false;
    }
  }
  