function pedirLivro(livro) {
  var nome = prompt("Qual é o seu nome?");
  if (nome != null && nome != "") {
    fetch('/pedido', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome: nome, livro: livro })
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      document.getElementById("pedido-container").innerHTML = `<p>${data}</p>`;
    })
    .catch(error => console.error('Erro:', error));
  }
}