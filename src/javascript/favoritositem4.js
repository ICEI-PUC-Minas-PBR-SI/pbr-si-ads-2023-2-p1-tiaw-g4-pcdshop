function adicionarAosFavoritos(imagePatch) {
  var itemName = "Aparelho auditivo digital modelo Adulto";
  var itemPrice = 225.0;
  var itemImage = imagePatch;
  var favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  var itemExistente = favoritos.find(
    (item) => item.name === itemName && item.image === imagePatch
  );

  if (!itemExistente) {
    favoritos.push({
      name: itemName,
      price: itemPrice,
      quantity: 1,
      image: itemImage,
    });
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    alert("Item adicionado aos favoritos!");
    window.location.href = "favoritos.html"; // Redireciona para a página de favoritos
  } else {
    alert("Item já está na lista de favoritos!");
  }
}
