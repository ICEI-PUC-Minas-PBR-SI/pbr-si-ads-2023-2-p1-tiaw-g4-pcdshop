function toggleHeart(button) {
  button.classList.toggle("clicked");
}
function adicionarAosFavoritos(itemId) {
  window.location.href = `favoritos.html?id=${itemId}`;
}
