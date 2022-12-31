const http = require('http');

http
  .createServer((req, res) => {
    console.log(req);
    res.writeHead(200, { 'content-type': 'text/plain' });
    const users = [
      { id: 1, name: 'Marcos', genero: 'Muy macho' },
      { id: 2, name: 'Mauricio', genero: 'Muy gay' },
    ];
    res.end(JSON.stringify(users));
  })
  .listen(3001, 'localhost');
