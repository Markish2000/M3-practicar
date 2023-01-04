const { arrayUsers } = require('./src/users');
const express = require('express');
const morgan = require('morgan');
const server = express();

server.use('/users', async (req, res) => {
  const getUsers = await arrayUsers();
  const datosOrdenados = getUsers.sort((a, b) => b.id - a.id).splice(0, 2);
  res.status(200).send(datosOrdenados);
});

// TODO: Query = Por link. Ejemplo: http://localhost:3001/names?name=renzo
server.use('/names', async (req, res) => {
  // TODO: Recibo Renzo y lo capturo con req.query.name
  const nombres = req.query.name;
  // TODO: Llamo al array de objeto de todos los usuarios.
  const getUsers = await arrayUsers();
  // TODO: Realizo un filtrado. Busco el nombre enviado por Query en el array de objeto donde se encuentran todos los usuarios.
  const filterUsers = getUsers.filter((element) => element.Nombre === nombres);
  res.status(200).send(filterUsers);
});

// TODO: Params = Por link. Ejemplo: http://localhost:3001/1
// server.get('/:id', (req, res) => {
// const { id } = req.params;
// const charac
// });
server.listen(3001);

// TODO: .find: Al encontrar 1 para y no le importa lo que sigue.
// TODO: .filter: Recorre todo y te muestra todos los que hay.
// TODO: Params: Para buscar ID usando un .find.
// TODO: Query: Para buscar varios con un .filter.
