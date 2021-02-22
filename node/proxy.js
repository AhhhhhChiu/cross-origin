const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  http.request({
    host: '127.0.0.1',
    url: '/',
    port: 3001,
    method: req.method,
    headers: req.headers,
  }, (response) => {
    let body = '';
    response.on('data', (chunk) => {
      body += chunk;
    }).on('end', () => {
      res.end(body);
    });
  }).end();
}).listen(3000);

console.log('Proxy server is running on http://localhost:3000/');
