const express = require('express');

const server = express();

// Query params = ?nome=NodeJS = req.query.nome
// Route Params = /curso/2 = req.param.id
// Request Body = { nome: 'NodeJS', tipo: 'BackEnd' }

const cursos = ['Node JS', 'JavaScript', 'Bosta'];

// localhost:3000/curso?nome=JavaScript
// localhost:3000/curso/2
server.get('/curso/:index', (req, res) => {
  const { index } = req.params;

  return res.json(`${cursos[index]}`);
});

server.listen(3000);
