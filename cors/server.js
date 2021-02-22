const http = require('http');
const whitList = ['http://localhost:8080/'];

http.createServer((req, res) => {
  console.log(req.method);
  console.log(Object.keys(req.headers));
  const origin = req.headers.origin;
  if (whitList.includes(origin)) {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'PUT',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Max-Age': 5,
    });
  }
  if (req.method === 'OPTIONS') {
    res.end();
  } else {
    // 拆分路由
    // ...
    res.end('ok');
  }
}).listen(3000);

console.log('Server is running on http://localhost:3000/');
