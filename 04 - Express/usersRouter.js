const express = require('express');

const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
  const { name } = req.query;
  if (!name) return res.send('Te devuelvo todos los usuarios');
  return res.send(`Te estoy mandando la información del usuario ${name}`);
});

usersRouter.post('/', (req, res) => {
  console.log(req.body);
  const { name, mail, birth } = req.body;
  console.log(name);
  console.log(mail);
  console.log(birth);
  return name && mail && birth
    ? res.status(200).send('Recibí bien todos los datos')
    : res
        .status(400)
        .send('Me faltan datos. No me mandaste todo lo que necesitaba');
});

usersRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Estás pidiendo la información del usuario ${id}`);
});

module.exports = usersRouter;
