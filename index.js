const express = require('express');

const server = express();

server.use(express.json());

// Query params = ?nome=NodeJS = req.query.nome
// Route Params = /curso/2 = req.param.id
// Request Body = { nome: 'NodeJS', tipo: 'BackEnd' }

const cursos = ['Node JS', 'JavaScript', 'Angular'];

server.get('/cursos', (req, res) => {
  return res.json(cursos);
});

server.get('/cursos/:index', (req, res) => {
  const { index } = req.params;

  return res.json(`${cursos[index]}`);
});

server.post('/cursos', (req, res) => {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});

server.listen(3000);
