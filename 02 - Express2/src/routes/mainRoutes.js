const { Router } = require('express');
const characterRouter = require('./characterRouter');

const mainRouter = Router();

mainRouter.use('/characters', characterRouter);

module.exports = mainRouter;
