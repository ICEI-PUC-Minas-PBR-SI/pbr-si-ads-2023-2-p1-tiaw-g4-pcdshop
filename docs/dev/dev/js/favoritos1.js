// Função para renderizar os produtos favoritos
function renderizarFavoritos() {
  var favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  var favoritosContainer = document.getElementById("favoritosContainer");

  if (favoritos.length === 0) {
    favoritosContainer.innerHTML =
      "<p>Nenhum item salvo como favorito ainda.</p>";
    return;
  }

  var html = "";
  favoritos.forEach(function (item) {
    html += `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${item.image}" class="card-img-top" alt="${item.name}">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">Preço: R$ ${item.price.toFixed(2)}</p>
              <button onclick="removerDosFavoritos('${item.name}', '${
      item.image
    }')" class="btn btn-danger">Remover dos Favoritos</button>
            </div>
          </div>
        </div>
      `;
  });

  favoritosContainer.innerHTML = html;
}

// Função para remover um item dos favoritos
function removerDosFavoritos(name, image) {
  var favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  var novaListaFavoritos = favoritos.filter(function (item) {
    return item.name !== name || item.image !== image;
  });

  localStorage.setItem("favoritos", JSON.stringify(novaListaFavoritos));

  renderizarFavoritos();
}

// Chamando a função de renderização ao carregar a página
window.onload = function () {
  renderizarFavoritos();
};
