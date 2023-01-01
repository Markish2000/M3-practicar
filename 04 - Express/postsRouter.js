const express = require('express');

const postsRouter = express.Router();

postsRouter.get('/', (req, res) => {
  res.send('Estoy en el GET de posts');
});

module.exports = postsRouter;
