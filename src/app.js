const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Configuração do body-parser para ler dados do corpo das requisições
app.use(bodyParser.json());

// Rota de exemplo
app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à minha API!' });
});

// Rota para uma lista de itens
const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

app.get('/items', (req, res) => {
  res.json(items);
});

// Rota para criar um novo item
app.post('/items', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório.' });
  }

  const newItem = {
    id: items.length + 1,
    name: name,
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
