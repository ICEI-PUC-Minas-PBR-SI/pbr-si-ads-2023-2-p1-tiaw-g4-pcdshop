
  document.addEventListener('DOMContentLoaded', function () {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var tableBody = document.querySelector('tbody');

    function renderCartItems() {
      tableBody.innerHTML = '';

      cartItems.forEach(function (item, index) {
        var row = document.createElement('tr'); 
        //ali depois do item. link tem o caminho da imagem do produto a ser adicionado
        row.innerHTML = `
  <td>
    <div class="product">       
      <a href="${item.link}"><img src="${item.image}" style="max-width: 100px; height: auto;"></a> &nbsp; 
      <div class="info">
        <div class="name">${item.name}</div>
        <div class="category">${item.category}</div>
      </div>
    </div>
  </td>
  <td>R$ ${item.price}</td>
  <td>
    <div class="qty">
      <button class="decrement" data-index="${index}"><i class="bx bx-minus"></i></button>
      <span>${item.quantity}</span>
      <button class="increment" data-index="${index}"><i class="bx bx-plus"></i></button>
    </div>
  </td>
  <td class="total">R$ ${(item.price * item.quantity).toFixed(2)}</td>
  <td>
    <button class="remove" data-index="${index}"><i class="bx bx-x"></i></button>
  </td>
`;

        tableBody.appendChild(row);
      });

      setupEventListeners();
    }

    function setupEventListeners() {
      var incrementButtons = document.querySelectorAll('.increment');
      var decrementButtons = document.querySelectorAll('.decrement');
      var removeButtons = document.querySelectorAll('.remove');

      incrementButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          incrementQuantity(this);
        });
      });

      decrementButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          decrementQuantity(this);
        });
      });

      removeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          if (window.confirm('Deseja remover este item do carrinho?')) {
            removeItem(this);
          }
        });
      });
    }

    function incrementQuantity(button) {
      var index = button.getAttribute('data-index');
      var item = cartItems[index];
      item.quantity++;
      updateLocalStorage();
      renderCartItems();
    }

    function decrementQuantity(button) {
      var index = button.getAttribute('data-index');
      var item = cartItems[index];
      if (item.quantity > 1) {
        item.quantity--;
        updateLocalStorage();
        renderCartItems();
      }
    }

    function updateLocalStorage() {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    function removeItem(button) {
      var index = button.getAttribute('data-index');
      cartItems.splice(index, 1);
      updateLocalStorage();
      renderCartItems();
    }

    renderCartItems();
  });
