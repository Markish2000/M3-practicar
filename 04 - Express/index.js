const express = require('express');
const morgan = require('morgan');
const usersRouter = require('./usersRouter');
const postsRouter = require('./postsRouter');

const server = express();

server.use('/', (req, res, next) => {
  console.log('Estamos pasando por el mid');
  next();
});

server.use(morgan('dev'));
server.use(express.json());

server.use('/users', usersRouter);
server.use('/posts', postsRouter);

server.listen('3001', () => {
  console.log('Ya anda en el puerto 3001');
});
