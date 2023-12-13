var listaImg=[]
var listaNome=[]
var listaPreco=[]
var listaDescricao=[];

function atualizarLista() {
    var elementoListaImg = document.getElementById('listaImg');
    elementoListaImg.innerHTML = '';
  
    for (var i = 0; i < listaImg.length; i++) {
		 elementoListaImg.innerHTML += '<div class="col-12 col-md-3 pt-2 pb-2 text-center">' +
		'	<div class="card border-black" style="width: 18rem;">' +
		'		<div style="height: 260px;">' +
		'			<a href="' + listaNome[i] + '"><img src="' + listaImg[i] + '" class="mr-img-fluid" alt="..."></a>' +
		'		</div>' +
		'		<div class="card">' +
		'			<h5 class="card-header text-center bg-dark text-light">R$ ' + listaPreco[i] + '</h5>' +
		'			<div class="card-body">' +
		'				<p class="card-text fw-bold">' + listaNome[i] + '</p>' +
		'				<a href="teladoitem4.html" class="btn bg-dark text-light text-center"><img src="imagens/carrinho_produto.png"> VER PRODUTO</a>' +
		'			</div>' +
		'		</div>' +
		'	</div>' +
		'</div>';

	  // CÓDIGO ANTIGO
	  /*
      elementoListaImg.innerHTML += '<div class="produto">' +
        '<img class="minhaImagem img-fluid" src="' + listaImg[i] + '">' +
        '<a class="meuLink" href="' + listaNome[i] + '">' + listaNome[i] + '</a>' +
        '<p class="meuPreco">R$: ' + listaPreco[i] + '</p>' +
        '<p class="minhaDescricao">Descrição: ' + listaDescricao[i] + '</p>' +
        '</div>';
	  */
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

  atualizarLista();
}
