const express = require('express');

const server = express();

server.use(express.json());

// Query params = ?nome=NodeJS = req.query.nome
// Route Params = /curso/2 = req.param.id
// Request Body = { nome: 'NodeJS', tipo: 'BackEnd' }

const cursos = ['Node JS', 'JavaScript', 'Angular'];

// GET - Pegando todos os registros
server.get('/cursos', (req, res) => {
  return res.json(cursos);
});

// GET - Pegando registro específico
server.get('/cursos/:index', (req, res) => {
  const { index } = req.params;

  return res.json(`${cursos[index]}`);
});

// POST - Adicionando registro
server.post('/cursos', (req, res) => {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});

// PUT - Editando registro
server.put('/cursos/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});

server.delete('/cursos/:index', (req, res) => {
  const { index } = req.params;

  cursos.splice(index, 1);

  return res.json(cursos);
});

server.listen(3000);
