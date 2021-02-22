const http = require('http');

http.createServer((req, res) => {
  const queryArr = req.url.match(/(?!(?:(\?|&)))(\w+)=(\w+)/g);
  const queryObj = {};
  queryArr.forEach((item) => {
    const [key, value] = item.split('=');
    queryObj[key] = value;
  });
  const { test, callback } = queryObj;
  console.log(`test = ${test}`);
  res.end(`${callback}('response from server')`);
}).listen(3000);

console.log('Server is running on http://localhost:3000');
