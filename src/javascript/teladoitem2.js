function adicionarAoCarrinho2(imagePatch) {
    // Obtenha os detalhes do item que você deseja adicionar ao carrinho
    var itemName = "Cadeira esportiva adaptável";
    var itemPrice = 2799.00;

    // Verifique se há itens no localStorage
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Verifique se o item já está no carrinho
    var itemExistente = cartItems.find(item => item.name === itemName && item.image === imagePatch);

    if (itemExistente) {
        // Atualize a quantidade se o item já estiver no carrinho
        itemExistente.quantity += 1;
    } else {
        // Adicione o novo item ao carrinho com a imagem
        cartItems.push({ name: itemName, price: itemPrice, quantity: 1, image: imagePatch });
    }

    // Atualize o localStorage com os itens do carrinho
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Alerta opcional para informar ao usuário que o item foi adicionado ao carrinho
    alert("Item adicionado ao carrinho!");
    window.location.href = "indexcarrinho.html";
}
