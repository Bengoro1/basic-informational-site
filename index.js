const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    fs.readFile('./index.html', (err, data) => {
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  } else if (req.url == '/about.html' || req.url == '/contact-me.html') {
    fs.readFile(`.${req.url}`, (err, data) => {
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  } else {
    fs.readFile('./404.html', (err, data) => {
      if (err) throw err;
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }
});

server.listen(8080, () => {
  console.log('Server is running...');
});