const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.post('/pedido', (req, res) => {
  let nome = req.body.nome;
  let livroPedido = req.body.livro;
  if (nome && livroPedido) {
    console.log(nome + " pediu " + livroPedido);
    res.send(`${nome} pediu ${livroPedido}`);
  } else {
    res.status(400).send('Nome do livro ou nome não fornecido');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});