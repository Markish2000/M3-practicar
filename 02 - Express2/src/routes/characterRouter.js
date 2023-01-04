const { Router } = require('express');
const dataBase = require('../dataBase');

const characterRouter = Router();
characterRouter.get('/', (req, res) => {
  const { name } = req.query;
  if (name) {
    const searchResults = dataBase.filter(
      (character) => character.name == name
    );
    res.status(200).json(searchResults);
  } else {
    res.status(200).json(dataBase);
  }
});

characterRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  const character = dataBase.find((character) => character.id == id);
  res.status(200).send(character);
});

characterRouter.post('/', (req, res) => {
  const { name, lastName } = req.body;
  console.log(name);
  const newCharacter = {
    id: dataBase.length + 1,
    name,
    lastName,
  };
  dataBase.push(newCharacter);
  res.status(200).send(dataBase);
});
module.exports = characterRouter;
