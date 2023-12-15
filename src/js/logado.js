// Função para armazenar os dados do usuário no local storage
function storeUser (nome, data, email, telefone, senha) {
    // Criar um objeto com os dados do usuário
    var user = {
      nome: nome,
      data: data,
      email: email,
      telefone: telefone,
      senha: senha
    };
  
    // Converter o objeto em uma string usando JSON.stringify ()
    var userString = JSON.stringify (user);
  
    // Armazenar a string no local storage usando o email como chave
    localStorage.setItem (email, userString);
  }
  
  // Função para mostrar o email do usuário na barra lateral
  function showEmail () {
    // Obter o elemento do link do perfil
    var profileLink = document.getElementById('usuario');
  
    // Obter o email do usuário do local storage
    var email = localStorage.getItem ('email');
  
    // Verificar se o email existe
    if (email) {
      // Alterar o texto do link do perfil para o email
      profileLink.textContent = email;
    }
  }
  
  // Chamar a função showEmail quando a página carregar
  window.onload = showEmail;
  