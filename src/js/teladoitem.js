function adicionarAoCarrinho(imagePatch) {
  var itemName = "Controle adaptável Xbox";
  var itemPrice = 499.00;
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  var itemExistente = cartItems.find(item => item.name === itemName && item.image === imagePatch);

  if (itemExistente) {
    itemExistente.quantity += 1;
  } else {
    cartItems.push({ name: itemName, price: itemPrice, quantity: 1, image: imagePatch });
  }

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  alert("Item adicionado ao carrinho!");
}
