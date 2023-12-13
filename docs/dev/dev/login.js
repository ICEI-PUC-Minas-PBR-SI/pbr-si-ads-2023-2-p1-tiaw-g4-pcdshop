document.querySelector('.login-form-1 form').addEventListener('submit', function(event) {
    var email = document.querySelector('.login-form-1 form .form-group input[type="text"]').value;
    var senha = document.querySelector('.login-form-1 form .form-group input[type="password"]').value;
    var confirmarSenha = document.querySelector('.login-form-1 form .form-group input[type="password"]').value;
    var cpf = document.querySelector('.login-form-1 form .form-group input[type="CPF"]').value;

    if (senha !== confirmarSenha) {
        alert('As senhas não correspondem!');
        event.preventDefault(); // impede o envio do formulário apenas se as senhas não corresponderem
        return;
    }

    // Aqui você pode fazer o que quiser com os dados do formulário
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('CPF:', cpf);
});
