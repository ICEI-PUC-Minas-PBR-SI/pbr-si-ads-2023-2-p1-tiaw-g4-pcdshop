var listaImg=[]
var listaNome=[]
var listaPreco=[]
var listaDescricao=[]

function atualizarLista() {
    var elementoListaImg = document.getElementById('listaImg');
    elementoListaImg.innerHTML = '';
  
    for (var i = 0; i < listaImg.length; i++) {
      elementoListaImg.innerHTML += '<div class="produto">' +
        '<img class="minhaImagem img-fluid" src="' + listaImg[i] + '">' +
        '<a class="meuLink" href="' + listaNome[i] + '">' + listaNome[i] + '</a>' +
        '<p class="meuPreco">R$: ' + listaPreco[i] + '</p>' +
        '<p class="minhaDescricao">Descrição: ' + listaDescricao[i] + '</p>' +
        '</div>';
    }
  }

window.onload = function() {
  carregarProdutos()
}

function carregarProdutos() {
  listaImg = JSON.parse(localStorage.getItem('listaImg')) || []
  listaNome = JSON.parse(localStorage.getItem('listaNome')) || []
  listaPreco = JSON.parse(localStorage.getItem('listaPreco')) || []
  listaDescricao = JSON.parse(localStorage.getItem('listaDescricao')) || []

  atualizarLista()
}
