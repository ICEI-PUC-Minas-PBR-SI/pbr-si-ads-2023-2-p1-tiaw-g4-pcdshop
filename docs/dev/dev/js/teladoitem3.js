function adicionarAoCarrinho3(imagePatch) {
    var itemName = "Bengala dobrável para deficientes visuais";
    var itemPrice = 37.99;
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var itemExistente = cartItems.find(item => item.name === itemName && item.image === imagePatch);
  
    if (itemExistente) {
      itemExistente.quantity += 1;
    } else {
      cartItems.push({ name: itemName, price: itemPrice, quantity: 1, image: imagePatch });
    }
  
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert("Item adicionado ao carrinho!");
    window.location.href = "indexcarrinho.html";
  }
  