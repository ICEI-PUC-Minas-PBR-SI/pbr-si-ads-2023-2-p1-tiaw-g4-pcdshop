document.addEventListener("DOMContentLoaded", function () {
  var favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  var container = document.getElementById("favoritosContainer");

  function renderFavoritos() {
    container.innerHTML = "";

    favoritos.forEach(function (item, index) {
      var card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
          <img src="${item.image}" class="card-img-top" alt="${item.name}">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">Preço: R$ ${item.price.toFixed(2)}</p>
            <button class="btn btn-primary remove" data-index="${index}">Remover dos Favoritos</button>
          </div>
        `;

      container.appendChild(card);
    });

    setupEventListeners();
  }

  function setupEventListeners() {
    var removeButtons = document.querySelectorAll(".remove");

    removeButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        if (window.confirm("Deseja remover este item dos favoritos?")) {
          removeItem(this);
        }
      });
    });
  }

  function removeItem(button) {
    var index = button.getAttribute("data-index");
    favoritos.splice(index, 1);
    updateLocalStorage();
    renderFavoritos();
  }

  function updateLocalStorage() {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }

  renderFavoritos();
});
