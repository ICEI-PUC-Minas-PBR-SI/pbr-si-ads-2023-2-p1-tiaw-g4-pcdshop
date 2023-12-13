var listaImg=[]
var listaNome=[]
var listaPreco=[]
var listaDescricao=[]

function atualizarLista() {
	var elementoListaImg = document.getElementById('listaImg');
	elementoListaImg.innerHTML = '';

    for (var i = 0; i < listaImg.length; i++) {
		elementoListaImg.innerHTML += '<a href="' + listaNome[i] + '"><div class="mr-produto">' +
		'		<div class="row align-items-center">' +
		'			<div class="col-3 col-md-auto">' +
		'				<div class="mr-prod-photo">' +
		'					<img src="' + listaImg[i] + '" class="img-fluid" />' +
		'				</div>' +
		'			</div>' +
		'			<div class="col-9 col-md-10 text-start">' +
		'				<div class="row align-items-center">' +
		'					<div class="col-12 col-md-8">' +
		'						<div class="mr-prod-textos">' +
		'							<div class="mr-prod-text-titulo">' + listaNome[i] + '</div>' +
		'							<div class="mr-prod-text-valor">R$ ' + listaPreco[i] + '</div>' +
		'						</div>' +
		'					</div>' +
		'				</div>' +
		'			</div>' +
		'		</div>' +
		'	</div>';
	  
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
