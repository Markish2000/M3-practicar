// const { sumar, imprimirNombre } = require('./functions');

// imprimirNombre('Jorge');
// imprimirNombre('Joaquin');
// imprimirNombre('Cris');

const fs = require('fs');

const text = fs.readFileSync('./text.txt', 'utf-8');
console.log(text);

// fs.readFile('./text.txt', 'utf-8', (err, data) => {
//   console.log(data);
//   console.log('Leyendo el archivo');
// });

console.log('Terminé de leer el archivo');
