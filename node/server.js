const http = require('http');

http.createServer((req, res) => {
  res.end('response from server');
}).listen(3001);

console.log('Server is running on http://localhost:3001/');
