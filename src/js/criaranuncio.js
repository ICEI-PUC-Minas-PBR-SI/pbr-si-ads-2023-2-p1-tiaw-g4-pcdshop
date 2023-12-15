var listaImg=[]
var listaNome=[]
var listaPreco=[]
var listaDescricao=[]

function adicionarProduto(event){
  event.preventDefault()
  var img = document.getElementById('img').files[0]
  var nome = document.getElementById('nome').value
  var preco = document.getElementById('preco').value
  var descricao = document.getElementById('descricao').value

  var reader = new FileReader()
  reader.onloadend = function () {
    listaImg.push(reader.result)
    listaNome.push(nome)
    listaPreco.push(preco)
    listaDescricao.push(descricao)

    atualizarLista()
    salvarProdutos()
  }
  reader.readAsDataURL(img)
}

function deletarProduto(index) {
  listaImg.splice(index, 1)
  listaNome.splice(index, 1)
  listaPreco.splice(index, 1)
  listaDescricao.splice(index, 1)

  atualizarLista()
  salvarProdutos()
}

function atualizarProduto(index) {
  var img = document.getElementById('img').files[0]
  var nome = document.getElementById('nome').value
  var preco = document.getElementById('preco').value
  var descricao = document.getElementById('descricao').value

  var reader = new FileReader()
  reader.onloadend = function () {
    listaImg[index] = reader.result
    listaNome[index] = nome
    listaPreco[index] = preco
    listaDescricao[index] = descricao

    atualizarLista()
    salvarProdutos()
  }
  reader.readAsDataURL(img)
}

function atualizarLista() {
  var elementoListaImg = document.getElementById('listaImg')
  elementoListaImg.innerHTML = '' 

  for(var i = 0; i<listaImg.length; i++){
    elementoListaImg.innerHTML += '<div class="produto">' +
                                    '<img class="minhaImagem" src="' + listaImg[i] + '">' +  
                                    '<a class="meuLink" href="' + listaNome[i] + '">' + listaNome[i] + '</a>' + 
                                    '<p class="meuPreco">R$: ' + listaPreco[i] + '</p>' + 
                                    '<p class="minhaDescricao">Descrição: ' + listaDescricao[i] + '</p>' +
                                    '<button class="btn btn-danger" onclick="deletarProduto(' + i + ')">Deletar</button>' +
                                    '<button class="btn btn-success" onclick="atualizarProduto(' + i + ')">Atualizar</button>' +
                                  '</div>'
  }
}

function salvarProdutos() {
  localStorage.setItem('listaImg', JSON.stringify(listaImg))
  localStorage.setItem('listaNome', JSON.stringify(listaNome))
  localStorage.setItem('listaPreco', JSON.stringify(listaPreco))
  localStorage.setItem('listaDescricao', JSON.stringify(listaDescricao))
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
